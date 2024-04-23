import React from "react"
import { Global, css } from "@emotion/react"

const FaniPayStyles = () => (
  <Global
    styles={css`
      /* Custom CSS for FaniPay widget */

      html body #fanipay-root #fanipay {
        width: 100% !important;
        margin: 0 !important;
        left: 0 !important;
        transform: translate(0) !important;
        padding: 18px;
        background: #f9bbbf !important;
        border: 2px solid pink;
      }

      html body #fanipay-root #fanipay #fanipay-show {
        height: 40px !important;
        padding-top: 5px;
        padding-bottom: 5px;
      }

      html body #fanipay-root #fanipay-wrapper {
        max-width: 1400px;
        margin: 0 auto;
      }
    `}
  />
)

export default FaniPayStyles
