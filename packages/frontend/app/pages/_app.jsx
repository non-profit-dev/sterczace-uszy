import App from "next/app"
import Head from "next/head"
import { createContext } from "react"
import { Normalize } from "styled-normalize"
import { ThemeProvider } from "@emotion/react"
import { node, shape } from "prop-types"

import { fetchAPI } from "frontend/lib/api"

import theme from "design-system/theme"

// Store Strapi Global object in context
export const GlobalContext = createContext({})

const MyApp = ({ Component, pageProps }) => {
  const { global } = pageProps

  return (
    <>
      <Head />
      <ThemeProvider theme={theme}>
        <GlobalContext.Provider value={global.attributes}>
          <Normalize />
          <Component {...pageProps} />
        </GlobalContext.Provider>
      </ThemeProvider>
    </>
  )
}

MyApp.propTypes = {
  Component: node.isRequired,
  pageProps: shape({}).isRequired,
}

MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx)
  // Fetch global site settings from Strapi
  const globalRes = await fetchAPI("/global", {
    populate: {
      favicon: "*",
      defaultSeo: {
        populate: "*",
      },
    },
  })
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global: globalRes.data } }
}

export default MyApp
