import { node, oneOf, string } from "prop-types"
import * as Styled from "./Container.styled"

const Container = ({ size, children, as, id, className }) => (
  <Styled.Container size={size} as={as} id={id} className={className}>
    {children}
  </Styled.Container>
)

Container.propTypes = {
  size: oneOf(["small", "medium", "large"]),
  children: node.isRequired,
  as: oneOf(["section", "article", "div", "main"]),
  id: string,
  className: string,
}

Container.defaultProps = {
  size: "large",
  as: "div",
  id: null,
  className: null,
}

export default Container
