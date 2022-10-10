import styled from "@emotion/styled"
import theme from "../theme/theme"

export const ListItem = styled.div`
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  background-color: "transparent";
  border-width: ${({ variant }) => (variant === "primary" ? "3px" : "5px")};
  border-style: "solid";
  border-color: ${({ variant }) => (variant === "primary" ? "red" : "blue")};
  color: ${({ variant }) =>
    variant === "primary" ? theme.colors.primary[500] : theme.colors.grey[600]};
  line-height: "22,4px";
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
`
export const ListItemIcon = styled.span`
  padding: 5px;
  height: "22,4px";
  align-items: center;
  justify-content: center;
  svg {
    padding: "3px";
  }
`
