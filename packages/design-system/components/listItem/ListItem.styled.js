import styled from "@emotion/styled"
import theme from "../theme/theme"

export const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  background-color: "transparent";
  color: ${({ variant }) =>
    variant === "primary" ? theme.colors.primary[500] : theme.colors.grey[600]};
  ${theme.typography.desktop.bodySmall};
`
export const ChildContainer = styled.div`
  color: inherit;
  flex-grow: 0;
  color: inherit;
  line-height: 30px;
`
export const ListItemIcon = styled.div`
  flex-grow: 0;
  align-items: center;
  justify-content: center;
  color: inherit;
`
