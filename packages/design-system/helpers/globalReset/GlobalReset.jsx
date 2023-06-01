import React from "react"
import { Global, css } from "@emotion/react"

import theme from "../../tokens/theme"

const GlobalReset = () => (
  <Global
    styles={css`
      html {
        scroll-behavior: smooth;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      body {
        margin: 0;
        font-family: ${theme.fontFamily};
      }

      ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }

      button {
        background: transparent;
        border: none;
      }

      a {
        color: ${theme.colors.primary[500]};
        font-weight: 500;
      }

      ::-moz-placeholder {
        opacity: 1;
      }

      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }
    `}
  />
)

export default GlobalReset
