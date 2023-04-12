import { string, node } from "prop-types"

import * as Styled from "./Banner.styled"

const Banner = ({ heading, button, className }) => (
  <Styled.Banner className={className} role="alert">
    <Styled.Heading variant="bodySmall" tag="p">
      {heading}
    </Styled.Heading>
    {button && <Styled.Button>{button}</Styled.Button>}
  </Styled.Banner>
)

Banner.propTypes = {
  heading: string.isRequired,
  /**
   * An optional button component that can be displayed right after the heading.
   */
  button: node,
  className: string,
}

Banner.defaultProps = {
  button: null,
  className: null,
}

export default Banner
