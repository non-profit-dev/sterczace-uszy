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

  font-size: ${({ size }) => {
    switch (size) {
      case "small":
        return theme.typography.desktop.bodySmall.size // TODO change after updating the theme file
      case "medium":
        return theme.typography.desktop.bodySmall.size
      case "large":
        return theme.typography.desktop.bodyMedium.size
      default:
        return theme.typography.desktop.bodySmall.size
    }
  }};
  font-weight: "400 px";
  line-height: ${({ size }) => {
    switch (size) {
      case "small":
        return theme.typography.desktop.bodySmall.lineHeight // TODO change after updating the theme file
      case "medium":
        return theme.typography.desktop.bodySmall.lineHeight
      case "large":
        return theme.typography.desktop.bodyMedium.lineHeight
      default:
        return theme.typography.desktop.bodySmall.lineHeight
    }
  }};
`
