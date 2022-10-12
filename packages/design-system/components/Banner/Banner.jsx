import { useState } from "react"
import { string, shape, func, node } from "prop-types"

import * as Styled from "./Banner.styled"

const Banner = ({ heading, link, button }) => {
  const [onClick, setonClick] = useState()

  const handleClick = () => {
    setonClick(!onClick)
    button.onClick()
  }

  return (
    <Styled.Banner>
      <Styled.Heading>{heading}</Styled.Heading>
      {link && <Styled.Link href={link.href}>{link.text}</Styled.Link>}
      {button && (
        <Styled.Button onClick={handleClick}>{button.icon}</Styled.Button>
      )}
    </Styled.Banner>
  )
}

Banner.propTypes = {
  heading: string.isRequired,
  link: shape({
    text: string,
    href: string,
  }),
  button: shape({
    icon: node,
    onClick: func,
  }),
}

Banner.defaultProps = {
  link: null,
  button: null,
}

export default Banner
