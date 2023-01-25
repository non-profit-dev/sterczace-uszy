import { oneOf, number, string } from "prop-types"

import * as Styled from "./Count.styled"

const Count = ({ count, size, className }) => (
  <Styled.Count size={size} className={className}>{count}</Styled.Count>
)

Count.propTypes = {
  count: number.isRequired,
  size: oneOf(["small", "medium", "large", "xlarge", "xxlarge"]),
  className : string,
}

Count.defaultProps = {
  size: "medium",
  className: null,
}

export default Count
