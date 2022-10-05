import styled from "@emotion/styled"
import theme from "../theme/theme"

export const ListItem = styled.div`
  flex-direction: row;
  justify-content: flex-start;
  background-color: "blue";
  border-width: "2px";
  border-color: orange;
  color: ${({ variant }) =>
    variant === "primary" ? theme.colors.primary[500] : theme.colors.grey[600]};
`
