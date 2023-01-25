import { node, number, string } from "prop-types"

import * as Styled from "./List.styled"

const List = ({ gap, children, className }) => (
  <Styled.Component gap={gap} className={className}>{children}</Styled.Component>
)

List.propTypes = {
  gap: number,
  children: node.isRequired,
  className: string,
}

List.defaultProps = {
  gap: 8,
  className: null,
}

export default List
