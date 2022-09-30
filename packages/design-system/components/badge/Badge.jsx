import React from "react"
import { oneOf, string } from "prop-types"

import * as Styled from "./Badge.styled"

const Badge = ({ variant, size, text }) => (
  <Styled.Badge variant={variant} size={size}>
    {text}
  </Styled.Badge>
)

Badge.propTypes = {
  text: string,
  variant: oneOf(["primary", "neutrals", "gray"]),
  size: oneOf(["small", "medium", "large"]),
}

Badge.defaultProps = {
  text: "Lorem ipsum",
  variant: "neutrals",
  size: "medium",
}

export default Badge
