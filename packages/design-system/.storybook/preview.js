import React from "react"
import { ThemeProvider } from "@emotion/react"
import { Normalize } from "styled-normalize"

import theme from "../components/theme"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Normalize />
      <Story />
    </ThemeProvider>
  ),
]
