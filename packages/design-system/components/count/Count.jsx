import { oneOf, number, string } from "prop-types"

import * as Styled from "./Count.styled"

const Count = ({ count, className, size, as }) => (
  <Styled.Count className={className} size={size} as={as}>
    {count}
  </Styled.Count>
)
Count.propTypes = {
  /**
   * The number value that's displayed as a component.
   */
  count: number.isRequired,
  className: string,
  as: string,
  size: oneOf(["xsmall", "small", "medium", "large"]),
}

Count.defaultProps = {
  className: null,
  as: null,
  size: "medium",
}

export default Count
