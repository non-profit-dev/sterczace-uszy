import { string, oneOf, node } from "prop-types"
import React from "react"

import * as Styled from "./Typography.styled"

const variantsMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  bodyLarge: "p",
  bodySmall: "p",
  bodyTitle: "p",
  bodyTiny: "p",
}

const Typography = ({ variant, color, children, as }) => (
  <Styled.Container
    variant={variant}
    color={color}
    as={as || variantsMapping[variant]}
  >
    {children}
  </Styled.Container>
)

Typography.propTypes = {
  color: string,
  variant: oneOf(Object.keys(variantsMapping)),
  as: string,
  children: node,
}

Typography.defaultProps = {
  color: "",
  children: "",
  as: "",
  variant: "bodySmall",
}

export default Typography
