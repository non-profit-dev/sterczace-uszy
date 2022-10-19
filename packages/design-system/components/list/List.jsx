import { node, number } from "prop-types"

import * as Styled from "./List.styled"

const List = ({ gap, children }) => (
  <Styled.Component gap={gap}>{children}</Styled.Component>
)

List.propTypes = {
  gap: number,
  children: node.isRequired,
}

List.defaultProps = {
  gap: 8,
}

export default List
