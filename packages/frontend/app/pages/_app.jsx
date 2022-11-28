import Head from "next/head"
import { Normalize } from "styled-normalize"
import { ThemeProvider } from "@emotion/react"
import { node, shape } from "prop-types"

import theme from "design-system/theme"

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head />
    <ThemeProvider theme={theme}>
      <Normalize />
      <Component {...pageProps} />
    </ThemeProvider>
  </>
)

MyApp.propTypes = {
  Component: node.isRequired,
  pageProps: shape({}).isRequired,
}

export default MyApp
