import styled from "@emotion/styled"
import theme from "../theme/theme"

export const ListItem = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  padding: "0px";
  gap: "4px";
  align-items: center;
  justify-content: flex-start;
  background-color: "transparent";
  color: ${({ variant }) =>
    variant === "primary" ? theme.colors.primary[500] : theme.colors.grey[600]};
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
  line-height: "22,4px";
`
export const ChildContainer = styled.div`
  color: ${({ variant }) =>
    variant === "primary" ? theme.colors.primary[500] : theme.colors.grey[600]};
  flex-direction: row;
  flex-grow: 2;
  color: inherit;
`
export const ListItemIcon = styled.div`
  padding: 0px 4px;
  height: "22,4px";
  width: "22,4px";
  flex-grow: 1;
  margin-right: "4px";
  padding: "0px";
  align-items: center;
  justify-content: center;
  flex-grow: 0;
  color: inherit;
  svg {
  }
`
