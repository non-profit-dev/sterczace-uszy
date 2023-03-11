import { number, string } from "prop-types"

import * as Styled from "./Count.styled"

const Count = ({ count, className }) => (
  <Styled.Count className={className}>{count}</Styled.Count>
)

Count.propTypes = {
  /**
   * The number value that's displayed as a component.
   */
  count: number.isRequired,
  className: string,
}

Count.defaultProps = {
  className: null,
}

export default Count
