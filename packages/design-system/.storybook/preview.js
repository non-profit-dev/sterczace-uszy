import React from "react"
import { ThemeProvider } from "styled-components"
import theme from "../components/theme"
import { Normalize } from "styled-normalize"

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
