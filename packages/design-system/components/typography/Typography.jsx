import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import theme from "../theme"
import * as Styled from "./Typography.styled"

const Container = styled.div`
  font-family: ${({ fontFamily }) => fontFamilyStyle(fontFamily)};
  font-size: ${({ size }) => sizes[size]};
  line-height: ${({ size }) => lineHeights[size]};
  color: ${({ textColor }) => colors[textColor] || "unset"};
`

const variantsMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  bodyLarge: "h6",
  bodyMedium: "h6",
  bodySmall: "p",
  bodyTitle: "p",
  bodySubtitle: "p",
  bodySmallBold: "p",
}
export const Typography = ({ variant, color, children, ...props }) => (
  <Container textColor={color} size={size}>
    {children}
  </Container>
)

Typography.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "neutrals",
    "grey",
    "complementary",
    "decorative",
  ]),
  size: PropTypes.oneOf(["normal", "large"]),
  fontFamily: PropTypes.oneOf(["Poppins", "sans-serif"]),
  children: PropTypes.node,
}

Typography.defaultProps = {
  color: "",
  size: "normal",
  fontFamily: null,
  children: "",
}
