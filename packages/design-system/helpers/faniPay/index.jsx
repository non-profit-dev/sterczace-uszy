import React from "react"
import { Global, css, useTheme } from "@emotion/react"

const FaniPayStyles = () => {
  const theme = useTheme()

  return (
    <Global
      styles={css`
        /* Custom CSS for FaniPay widget */

        html body #fanipay-root #fanipay {
          z-index: 99 !important;
          width: 100% !important;
          margin: 0 !important;
          left: 0 !important;
          transform: translate(0) !important;
          padding: 18px;
          background: ${theme.colors.primary[100]} !important;
          box-shadow: none !important;

          #fanipay-wrapper {
            max-width: 1260px;
            margin: 0 auto;
          }

          #fanipay-header {
            height: unset !important;
            display: flex;
            align-items: center;
            justify-content: space-between;

            ${theme.breakpoints.tabletLg} {
              flex-direction: column;
              gap: 12px;
            }

            #fanipay-title {
              border-radius: 30px;
              border: 2px solid ${theme.colors.primary[500]} !important;
              color: ${theme.colors.primary[500]} !important;
              background: transparent !important;
              height: unset !important;
              width: unset !important;
              padding: 8px 32px !important;
              line-height: 20px !important;
            }

            /* CTA button */
            #fanipay-show {
              display: flex !important;
              gap: 10px;
              align-items: center;
              height: 40px !important;
              width: unset !important;
              padding: 5px 30px;
              top: 0 !important;

              ${theme.breakpoints.tabletLg} {
                display: none !important;
              }
            }

            #fanipay-amounts {
              display: flex !important;
              flex-wrap: wrap;
              gap: 8px;
              justify-content: center;
              align-items: center;
              margin: 0 !important;
              width: unset !important;
              padding: 0 !important;

              .fanipay-label {
                display: flex !important;
                width: unset !important;
                height: unset !important;
                padding: 0 26px !important;
                border-radius: 30px !important;
                border: 2px solid ${theme.colors.gray[700]};
                background: ${theme.colors.neutrals[100]};
                vertical-align: middle !important;
                margin: 0 !important;

                ${theme.breakpoints.tablet} {
                  padding: 0 16px !important;
                }
              }

              .fanipay-amount {
                font-size: 20px !important;
                height: unset !important;

                ${theme.breakpoints.tablet} {
                  font-size: 16px !important;
                }
              }

              .fanipay-selected {
                border: 2px solid transparent !important;
              }
            }

            .fanipay-amount-custom-link {
              padding: 0 26px !important;
              border-radius: 30px !important;
              border: 2px solid ${theme.colors.gray[700]};
              background: ${theme.colors.neutrals[100]};
              color: ${theme.colors.gray[700]} !important;
              font-size: 18px !important;
              line-height: 34px !important;
              height: unset !important;
            }
          }

          #fanipay-content {
            margin-top: 10px;

            .fanipay-content-left {
              display: none !important;
            }

            .fanipay-content-right {
              padding: 10px !important;
            }

            .fanipay-form {
              display: flex !important;
              align-items: center;

              ${theme.breakpoints.tabletLg} {
                flex-direction: column;
              }

              label {
                display: flex !important;
                flex-direction: column;
                width: unset !important;

                span {
                  text-align: left !important;
                }
              }

              input {
                height: unset !important;
                padding: 10px 14px !important;
                border-radius: 10px !important;
              }
            }

            #fanipay-form-submit {
              display: flex !important;
              gap: 10px;
              align-items: center;
              height: unset !important;
              width: 160px !important;
              padding: 5px 30px;
            }
          }

          #fanipay-toggle {
            width: 200px;
          }

          #fanipay-hide {
            background: transparent !important;
          }
        }
      `}
    />
  )
}

export default FaniPayStyles
