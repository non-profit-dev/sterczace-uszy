import React from "react"
import { string, oneOf, func, oneOfType, node } from "prop-types"

import * as Styled from "./ListItem.styled"

const ListItem = ({ children, variant, icon }) => (
  <Styled.ListItem variant={variant}>
    {icon && <Styled.ListItemIcon>{icon}</Styled.ListItemIcon>}
    {children}
  </Styled.ListItem>
)

ListItem.propTypes = {
  children: oneOfType([node, string]),
  variant: oneOf(["primary", "gray"]),
  icon: node,
}
ListItem.defaultProps = {
  children: "lorem ipsum dolor",
  variant: "primary",
  icon: null,
}

export default ListItem
