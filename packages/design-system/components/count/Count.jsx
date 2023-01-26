import { oneOf, number } from "prop-types"

import * as Styled from "./Count.styled"

const Count = ({ count, size }) => (
  <Styled.Count size={size}>{count}</Styled.Count>
)

Count.propTypes = {
  /**
   * The number value that's displayed as a component.
   */
  count: number.isRequired,
  size: oneOf(["small", "medium", "large", "xlarge", "xxlarge"]),
}

Count.defaultProps = {
  size: "medium",
}

export default Count
