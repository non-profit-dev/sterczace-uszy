import React from "react"
import { string, oneOf } from "prop-types"

import * as Styled from "./ListItem.styled"

const ListItem = ({ text, variant }) => (
  <Styled.ListItem variant={variant}>{text}</Styled.ListItem>
)

ListItem.propTypes = {
  text: string,
  variant: oneOf(["primary", "gray"]),
}
ListItem.defaultProps = {
  text: "Lorem ipsum",
  variant: "primary",
}

export default ListItem
