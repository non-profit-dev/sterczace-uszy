import Head from "next/head"
import { Normalize } from "styled-normalize"
import { ThemeProvider, Global, css } from "@emotion/react"
import { func, shape } from "prop-types"
// eslint-disable-next-line import/no-unresolved
import { Analytics } from "@vercel/analytics/react"

import theme from "design-system/theme"

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head />
    <ThemeProvider theme={theme}>
      <Normalize />
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
  </>
)

MyApp.propTypes = {
  Component: func.isRequired,
  pageProps: shape({}).isRequired,
}

export default MyApp
