import { string, node } from "prop-types"

import * as Styled from "./Banner.styled"

const Banner = ({ heading, button, className }) => (
  <Styled.Banner className={className}>
    <Styled.Heading>{heading}</Styled.Heading>
    {button}
  </Styled.Banner>
)

Banner.propTypes = {
  heading: string.isRequired,
  button: node,
  className: string, 
}

Banner.defaultProps = {
  button: null,
  className: null,
}

export default Banner
