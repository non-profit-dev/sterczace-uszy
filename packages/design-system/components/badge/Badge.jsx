import { oneOf, string } from "prop-types"

import * as Styled from "./Badge.styled"

const Badge = ({ variant, size, text }) => (
  <Styled.Badge variant={variant} size={size}>
    {text}
  </Styled.Badge>
)

Badge.propTypes = {
  /**
   * A text simply displayed inside the component.
   */
  text: string.isRequired,
  variant: oneOf(["primary", "neutrals", "gray"]),
  size: oneOf(["small", "medium", "large"]),
}

Badge.defaultProps = {
  variant: "neutrals",
  size: "medium",
}

export default Badge
