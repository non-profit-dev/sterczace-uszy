import { node, string } from "prop-types"

import * as Styled from "./List.styled"

const List = ({ gap, children }) => (
  <Styled.Component gap={gap}>{children}</Styled.Component>
)

List.propTypes = {
  gap: string.isRequired,
  children: node.isRequired,
}

export default List
