import { node, number } from "prop-types"

import * as Styled from "./List.styled"

const List = ({ gap, children }) => (
  <Styled.Component gap={gap}>{children}</Styled.Component>
)

List.propTypes = {
  gap: number.isRequired,
  children: node.isRequired,
}

export default List
