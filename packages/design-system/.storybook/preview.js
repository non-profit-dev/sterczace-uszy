import React from "react"
import { css, Global, ThemeProvider } from "@emotion/react"
import { Normalize } from "styled-normalize"

import theme from "design-system/theme"

import "./styles.css"

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
      <Global
        styles={css`
          * {
            box-sizing: border-box;
          }
        `}
      />
      <Story />
    </ThemeProvider>
  ),
]
