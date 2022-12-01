import { string, oneOf, oneOfType, number } from "prop-types"

import * as Styled from "./Count.styled"

const Count = ({ count, size }) => (
  <Styled.Count size={size}>{count}</Styled.Count>
)

Count.propTypes = {
  count: oneOfType([string, number]).isRequired,
  size: oneOf(["small", "medium", "large", "xlarge", "xxlarge"]),
}

Count.defaultProps = {
  size: "medium",
}

export default Count
