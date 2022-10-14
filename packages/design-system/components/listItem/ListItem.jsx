import React from "react"
import { string, oneOf, oneOfType, node } from "prop-types"

import * as Styled from "./ListItem.styled"

const ListItem = ({ children, variant, icon }) => (
  <Styled.ListItem variant={variant}>
    {icon && <Styled.ListItemIcon>{icon}</Styled.ListItemIcon>}
    <Styled.ChildContainer variant={variant}>{children}</Styled.ChildContainer>
  </Styled.ListItem>
)

ListItem.propTypes = {
  children: oneOfType([node, string]).isRequired,
  variant: oneOf(["primary", "gray"]),
  icon: node,
}
ListItem.defaultProps = {
  variant: "primary",
  icon: null,
}

export default ListItem
