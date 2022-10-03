import styled from "@emotion/styled"
import theme from "../theme/theme"

export const Badge = styled.div`
  display: inline-block;
  line-height: 140%;
  padding: 0px 8px;
  border-radius: 4px;
  background-color: ${({ variant }) => {
    switch (variant) {
      case "gray":
        return theme.colors.grey[200]
      case "neutrals":
        return theme.colors.neutrals[400]
      case "primary":
        return theme.colors.primary[500]
      default:
        return theme.colors.gray[200]
    }
  }};
  color: ${({ variant }) =>
    variant === "primary"
      ? theme.colors.neutrals[100]
      : theme.colors.grey[500]};
  font-size: ${({ size }) => {
    switch (size) {
      case "small":
        return "14px"
      case "medium":
        return "16px"
      case "large":
        return "20px"
      default:
        return "14px"
    }
  }};
`
