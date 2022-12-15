import styled from "@emotion/styled"
import { css } from "@emotion/react"

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
        `}
`

export const Container = styled.div`
  margin: ${({ size }) => (size === "tiny" ? "8px 0 20px 0" : "12px 0 32px 0")};
`

export const ButtonContainer = styled.div`
  margin-top: ${({ size }) => (size === "tiny" ? "20px" : "40px")};
`

export const IconWrapper = styled.div`
  position: relative;
`

