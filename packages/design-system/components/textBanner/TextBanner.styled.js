import styled from "@emotion/styled"
import { css } from "@emotion/react"

export const TextBanner = styled.div`
  display: flex;
  flex-direction: column;
  width: 366px;

  ${({ layout }) =>
    layout === "center"
      ? css`
          align-items: center;
          text-align: center;
          width: 484px;
        `
      : css`
          align-items: flex-start;
        `}
`
