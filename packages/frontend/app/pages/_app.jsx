import Script from "next/script"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { ThemeProvider } from "@emotion/react"
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"
import { func, shape } from "prop-types"
import { ApolloProvider } from "@apollo/client"
import { CookiesProvider } from "react-cookie"
import "swiper/swiper-bundle.css"
// eslint-disable-next-line import/no-unresolved
import theme from "design-system/tokens/theme"
import CookiesBanner from "design-system/blocks/cookiesBanner"
import GlobalReset from "design-system/helpers/globalReset/GlobalReset"
import * as gtag from "../lib/gtag"
import client from "../lib/api"
import "normalize.css/normalize.css"

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on("routeChangeComplete", handleRouteChange)
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}

            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'analytics_storage': 'denied'
            });

            gtag('js', new Date());
            
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
                       
          `,
        }}
      />
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <ApolloProvider client={client}>
        <GoogleReCaptchaProvider
          reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY}
        >
          <ThemeProvider theme={theme}>
            <GlobalReset />

            <CookiesProvider>
              <Component {...pageProps} />
              <CookiesBanner>adadasdad</CookiesBanner>
            </CookiesProvider>
          </ThemeProvider>
        </GoogleReCaptchaProvider>
      </ApolloProvider>
    </>
  )
}

MyApp.propTypes = {
  Component: func.isRequired,
  pageProps: shape({}).isRequired,
}

export default MyApp
