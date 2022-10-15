import PropTypes from "prop-types"
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
  bodyMedium: "p",
  bodySmall: "p",
  bodyTitle: "p",
  bodySubtitle: "p",
  bodySmallBold: "p",
}

export const Typography = ({
  variant,
  color,
  breakpoints,
  children,
  as,
  ...props
}) => (
  <Styled.Container
    variant={variant}
    color={color}
    breakpoints={breakpoints}
    as={as || variantsMapping[variant]}
    {...props}
  >
    {children}
  </Styled.Container>
)

Typography.propTypes = {
  color: PropTypes.oneOf([PropTypes.string]),
  variant: PropTypes.oneOf([PropTypes.string]),
  as: PropTypes.string,
  children: PropTypes.node,
}

Typography.defaultProps = {
  color: "",
  children: "",
  as: "",
  variants: "",
}

export default Typography
