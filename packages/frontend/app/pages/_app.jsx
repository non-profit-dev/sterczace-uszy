import Head from "next/head"
import { ThemeProvider } from "@emotion/react"
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"
import { func, shape } from "prop-types"
import { ApolloProvider } from "@apollo/client"
import "swiper/swiper-bundle.css"

// eslint-disable-next-line import/no-unresolved
import { Analytics } from "@vercel/analytics/react"

import theme from "design-system/tokens/theme"
import GlobalReset from "design-system/helpers/globalReset/GlobalReset"

import client from "../lib/api"

import "normalize.css/normalize.css"

const MyApp = ({ Component, pageProps }) => (
  <>
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
          <Component {...pageProps} />
          <Analytics />
        </ThemeProvider>
      </GoogleReCaptchaProvider>
    </ApolloProvider>
  </>
)

MyApp.propTypes = {
  Component: func.isRequired,
  pageProps: shape({}).isRequired,
}

export default MyApp
