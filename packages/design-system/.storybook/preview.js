import React from "react"
import { ThemeProvider, Global, css } from "@emotion/react"

import theme from "design-system/theme"

import "./styles.css"

import "normalize.css/normalize.css"

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
      <Global
        styles={css`
          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }
        `}
      />
      <Story />
    </ThemeProvider>
  ),
]
