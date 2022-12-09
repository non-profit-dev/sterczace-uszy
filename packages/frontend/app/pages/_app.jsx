import Head from "next/head"
import { Normalize } from "styled-normalize"
import { ThemeProvider, Global, css } from "@emotion/react"
import { node, shape } from "prop-types"

import theme from "design-system/theme"

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head />
    <ThemeProvider theme={theme}>
      <Normalize />
      <Global
        styles={css`
          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }
        `}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  </>
)

MyApp.propTypes = {
  Component: node.isRequired,
  pageProps: shape({}).isRequired,
}

export default MyApp
