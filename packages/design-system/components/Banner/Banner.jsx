import { string, shape, node } from "prop-types"

import * as Styled from "./Banner.styled"

const Banner = ({ heading, link, button }) => (
  <Styled.Banner>
    <Styled.Heading>{heading}</Styled.Heading>
    {link && <Styled.Link href={link.href}>{link.text}</Styled.Link>}
    {button && <Styled.Button>{button.icon}</Styled.Button>}
  </Styled.Banner>
)

Banner.propTypes = {
  heading: string.isRequired,
  link: shape({
    text: string,
    href: string,
  }),
  button: shape({
    icon: node,
  }),
}

Banner.defaultProps = {
  link: null,
  button: null,
}

export default Banner
