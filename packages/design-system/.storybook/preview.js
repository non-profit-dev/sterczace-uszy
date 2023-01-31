import React from "react"
import { ThemeProvider, Global, css } from "@emotion/react"
import { Normalize } from "styled-normalize"

import theme from "design-system/theme"

import "./styles.css"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: {
    viewports: {
      desktop: {
        name: "Desktop",
        styles: {
          width: "1440px",
          height: "841px",
        },
      },
      tablet: {
        name: "Tablet",
        styles: {
          width: "744px",
          height: "1133px",
        },
      },
      mobile: {
        name: "Mobile",
        styles: {
          width: "390px",
          height: "667px",
        },
      },
    },
  },
  docs: {
    source: {
      state: "open",
    },
  },
}

export const decorators = [
  (Story) => (
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
      <Story />
    </ThemeProvider>
  ),
]
