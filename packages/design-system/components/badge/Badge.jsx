import { oneOf, string } from "prop-types"

import * as Styled from "./Badge.styled"

const Badge = ({ variant, size, text, className }) => (
  <Styled.Badge variant={variant} size={size} className={className}>
    {text}
  </Styled.Badge>
)

Badge.propTypes = {
  text: string.isRequired,
  variant: oneOf(["primary", "neutrals", "gray"]),
  size: oneOf(["small", "medium", "large"]),
  className : string,
}

Badge.defaultProps = {
  variant: "neutrals",
  size: "medium",
  className: null
}

export default Badge
