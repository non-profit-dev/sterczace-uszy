import { node, string } from "prop-types"

import * as Styled from "./List.styled"

const List = ({ gap, children }) => (
  <Styled.Component gap={gap}>{children}</Styled.Component>
)

List.propTypes = {
  gap: string,
  children: node.isRequired,
}

List.defaultProps = {
  gap: "8px",
}

export default List
