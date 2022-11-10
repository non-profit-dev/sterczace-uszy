import React from "react"
import { string, oneOf, oneOfType, node } from "prop-types"
import { Icon } from "design-system/components/icon"

import * as Styled from "./ListItem.styled"

const ListItem = ({ children, variant, iconName, iconSize }) => (
  <Styled.ListItem variant={variant}>
    {iconName && (
      <Styled.ListItemIcon>
        <Icon name={iconName} size={iconSize} />
      </Styled.ListItemIcon>
    )}
    <Styled.ChildContainer variant={variant}>{children}</Styled.ChildContainer>
  </Styled.ListItem>
)

ListItem.propTypes = {
  children: oneOfType([node, string]).isRequired,
  variant: oneOf(["primary", "gray"]),
  iconName: string,
  iconSize: oneOf(["medium"]),
}
ListItem.defaultProps = {
  variant: "primary",
  iconName: null,
  iconSize: "medium",
}

export default ListItem
