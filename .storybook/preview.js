import React from "react"
import { ThemeProvider } from "@emotion/react"
import "swiper/swiper-bundle.css"

import theme from "../packages/design-system/tokens/theme"

import "./styles.css"

import "normalize.css/normalize.css"
import GlobalReset from "design-system/helpers/globalReset/GlobalReset"

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
  options: {
    storySort: {
      order: ["Tokens", "Components", "Patterns", "Blocks"],
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
      <GlobalReset />
      <Story />
    </ThemeProvider>
  ),
]
