import React from "react"
import { ThemeProvider, Global, css } from "@emotion/react"
import * as NextImage from "next/image"

import theme from "../packages/design-system/tokens/theme"

import "./styles.css"

import "normalize.css/normalize.css"

const OriginalNextImage = NextImage.default

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
      order: ["Tokens", "Components", "Blocks", "Patterns"],
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

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
})
