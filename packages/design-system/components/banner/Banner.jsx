import { string, node } from "prop-types"

import * as Styled from "./Banner.styled"

const Banner = ({ heading, button }) => (
  <Styled.Banner>
    <Styled.Heading>{heading}</Styled.Heading>
    {button}
  </Styled.Banner>
)

Banner.propTypes = {
  heading: string.isRequired,
  /**
   * An optional button component that can be displayed right after the heading.
   */
  button: node,
}

Banner.defaultProps = {
  button: null,
}

export default Banner
