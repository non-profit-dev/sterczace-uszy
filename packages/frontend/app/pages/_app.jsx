import Head from "next/head"
import { ThemeProvider, Global, css } from "@emotion/react"
import { func, shape } from "prop-types"
import { ApolloProvider } from "@apollo/client"
import "swiper/swiper-bundle.css"

// eslint-disable-next-line import/no-unresolved
import { Analytics } from "@vercel/analytics/react"

import theme from "design-system/tokens/theme"

import client from "../lib/api"

import "normalize.css/normalize.css"

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head />
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Global
          styles={css`
            body {
              margin: 0;
            }
            *,
            *::before,
            *::after {
              box-sizing: border-box;
            }
          `}
        />
        <Component {...pageProps} />
        <Analytics />
      </ThemeProvider>
    </ApolloProvider>
  </>
)

MyApp.propTypes = {
  Component: func.isRequired,
  pageProps: shape({}).isRequired,
}

export default MyApp
