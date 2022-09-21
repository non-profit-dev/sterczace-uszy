import { useState } from "react"
import { string, oneOf, shape, func } from "prop-types"

import * as Styled from "./Component.styled"

export const Component = ({
  heading,
  description,
  link,
  variant,
  size,
  icon: Icon,
  onClick,
}) => {
  const [favorite, setFavorite] = useState()

  const handleClick = () => {
    setFavorite(!favorite)
    // the onClick is an additional callback that's fired outside of this component, it's not required, it depends on the component's functionality
    onClick()
  }

  return (
    <Styled.Component size={size}>
      <Styled.Heading size={size}>{heading}</Styled.Heading>
      <Styled.Description size={size}> {description}</Styled.Description>
      {link && (
        <Styled.Link variant={variant} size={size} href={link.href}>
          {link.text}
        </Styled.Link>
      )}
      <Styled.Button
        variant={variant}
        size={size}
        favorite={favorite}
        onClick={handleClick}
      >
        <Icon />
      </Styled.Button>
    </Styled.Component>
  )
}

Component.propTypes = {
  heading: string.isRequired,
  description: string.isRequired,
  link: shape({
    text: string,
    href: string,
  }),
  variant: oneOf(["primary", "secondary"]),
  size: oneOf(["small", "medium", "large"]),
  icon: func.isRequired,
  onClick: func.isRequired,
}

Component.defaultProps = {
  variant: "primary",
  size: "medium",
  link: null,
}
