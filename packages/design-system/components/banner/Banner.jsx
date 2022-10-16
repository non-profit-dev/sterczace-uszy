import { string, node } from "prop-types"

import * as Styled from "./Banner.styled"

const Banner = ({ heading, button }) => (
  <Styled.Banner>
    <Styled.Heading>{heading}</Styled.Heading>
    {button && button}
  </Styled.Banner>
)

Banner.propTypes = {
  heading: string.isRequired,
  button: node,
}

Banner.defaultProps = {
  button: null,
}

export default Banner
