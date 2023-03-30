import styled from "@emotion/styled"
import { css } from "@emotion/react"

import Typography from "design-system/components/typography"

export const TextBanner = styled.div`
  display: flex;
  flex-direction: column;

  ${({ layout }) =>
    layout === "center"
      ? css`
          align-items: center;
          text-align: center;
        `
      : css`
          align-items: flex-start;
          text-align: left;
        `}

  ${({ tabletLayout, theme }) =>
    tabletLayout === "center"
      ? css`
          ${theme.breakpoints.tabletLg} {
            align-items: center;
            text-align: center;
          }
        `
      : css`
          ${theme.breakpoints.tabletLg} {
            align-items: flex-start;
            text-align: left;
          }
        `}

  ${({ mobileLayout, theme }) =>
    mobileLayout === "center"
      ? css`
          ${theme.breakpoints.mobileLg} {
            align-items: center;
            text-align: center;
          }
        `
      : css`
          ${theme.breakpoints.mobileLg} {
            align-items: flex-start;
            text-align: left;
          }
        `}
`

export const Container = styled.div`
  margin: ${({ size }) => (size === "tiny" ? "8px 0 20px 0" : "12px 0 32px 0")};

  ${({ theme }) => theme.breakpoints.mobile} {
    margin: 8px 0 12px 0;
  }
`

export const ButtonContainer = styled.div`
  margin-top: ${({ size }) => (size === "tiny" ? "20px" : "40px")};

  ${({ theme }) => theme.breakpoints.mobile} {
    margin-top: 32px;
  }
`

export const Subtitle = styled(Typography)`
  text-transform: uppercase;
`

export const Description = styled(Typography)`
  & > * + * {
    padding-top: 30px;
  }
`
