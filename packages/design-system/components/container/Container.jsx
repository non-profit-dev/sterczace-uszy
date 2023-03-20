import { node, oneOf, string } from "prop-types"
import * as Styled from "./Container.styled"

const Container = ({ size, children, as, className }) => (
  <Styled.Container size={size} as={as} className={className}>
    {children}
  </Styled.Container>
)

Container.propTypes = {
  size: oneOf(["small", "medium", "large"]),
  children: node.isRequired,
  as: oneOf(["section", "article", "div", "main"]),
  className: string,
}

Container.defaultProps = {
  size: "large",
  as: "div",
  className: null,
}

export default Container
