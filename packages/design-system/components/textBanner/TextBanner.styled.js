import styled from "@emotion/styled"
import { css } from "@emotion/react"
import theme from "../../theme/theme"

const sizes = {
  small: {
    typography: theme.typography.desktop.bodySmall,
    padding: "8px 32px",
  },
  medium: {
    typography: theme.typography.desktop.h5,
    padding: "10px 40px",
  },
  large: {
    typography: theme.typography.desktop.h4,
    padding: "12px 48px",
  },
}

export const TextBanner = styled.div`
  ${({ size }) => sizes[size].typography};
  display: flex;
  flex-direction: column;
  gap: 20px;
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
