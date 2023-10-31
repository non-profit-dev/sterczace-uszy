import Script from "next/script"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { hotjar } from "react-hotjar"
import { ThemeProvider } from "@emotion/react"
import { ErrorBoundary } from "@rollbar/react"
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"
import { func, shape } from "prop-types"
import { ApolloProvider } from "@apollo/client"
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
    hotjar.initialize(3621586, 6)
  }, [])

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
      <ErrorBoundary>
        <ApolloProvider client={client}>
          <GoogleReCaptchaProvider
            reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY}
          >
            <ThemeProvider theme={theme}>
              <GlobalReset />
              <Component {...pageProps} />
              <CookiesBanner />
            </ThemeProvider>
          </GoogleReCaptchaProvider>
        </ApolloProvider>
      </ErrorBoundary>
    </>
  )
}

MyApp.propTypes = {
  Component: func.isRequired,
  pageProps: shape({}).isRequired,
}

export default MyApp
