import { string, node } from "prop-types"

import * as Styled from "./Banner.styled"

const Banner = ({ children, className }) => (
  <Styled.Banner className={className} role="alert">
    <Styled.Heading variant="bodySmall" tag="p">
      {children}
    </Styled.Heading>
  </Styled.Banner>
)

Banner.propTypes = {
  children: node.isRequired,
  className: string,
}

Banner.defaultProps = {
  className: null,
}

export default Banner
