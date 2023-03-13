import { oneOf, number, string } from "prop-types"

import * as Styled from "./Count.styled"

const Count = ({ count, className, variant }) => (
  <Styled.Count variant={variant} className={className}>
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
}

Count.defaultProps = {
  className: null,
  variant: "title",
}

export default Count
