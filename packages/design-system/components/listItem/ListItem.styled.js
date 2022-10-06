import styled from "@emotion/styled"
import theme from "../theme/theme"

export const ListItem = styled.div`
  flex-direction: row;
  flex: 1;
  justify-content: flex-start;
  background-color: "blue";
  border-width: "2px";
  border-color: ${({ variant }) =>
    variant === "primary" ? theme.colors.primary[300] : theme.colors.grey[300]};
  color: ${({ variant }) =>
    variant === "primary" ? theme.colors.primary[500] : theme.colors.grey[600]};
`
