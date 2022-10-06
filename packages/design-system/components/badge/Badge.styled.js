import styled from "@emotion/styled"
import theme from "../theme/theme"

export const Badge = styled.div`
  display: inline-block;
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

  ${({ size }) => {
    switch (size) {
      case "small":
        return theme.typography.desktop.bodySubtitle
      case "medium":
        return theme.typography.desktop.bodySmall
      case "large":
        return theme.typography.desktop.bodyMedium
      default:
        return theme.typography.desktop.bodySmall
    }
  }};

  line-height: ${({ size }) => {
    switch (size) {
      case "small":
        return "20px"
      case "medium":
        return "22px"
      case "large":
        return "28px"
      default:
        return "22px"
    }
  }};

  font-style: normal;
`
