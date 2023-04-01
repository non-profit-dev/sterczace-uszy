import { oneOf, number, string } from "prop-types"

import * as Styled from "./Count.styled"

const Count = ({ count, className, variant, size }) => (
  <Styled.Count variant={variant} className={className} size={size}>
    {count}
  </Styled.Count>
)
Count.propTypes = {
  /**
   * The number value that's displayed as a component.
   */
  count: number.isRequired,
  className: string,
  variant: oneOf(["title", "decorative"]),
  size: oneOf(["xsmall", "small", "medium", "large"]),
}

Count.defaultProps = {
  className: null,
  variant: "title",
  size: "medium",
}

export default Count
