import { useState } from "react"
import { string, oneOf, shape, func } from "prop-types"

import * as Styled from "./Component.styled"

const typography = {
  small: {
    heading: "h6",
    description: "bodySmall",
  },
  medium: {
    heading: "h4",
    description: "bodyMedium",
  },
  large: {
    heading: "h3",
    description: "bodyLarge",
  },
}

const Component = ({ heading, description, link, button, variant, size }) => {
  const [favorite, setFavorite] = useState()

  const handleClick = () => {
    setFavorite(!favorite)
    // the onClick is an additional callback that's fired outside of this component, it's not required, it depends on the component's functionality
    button.onClick()
  }

  return (
    <Styled.Component size={size}>
      <Styled.Heading typographyVariant={typography[size].heading}>
        {heading}
      </Styled.Heading>
      <Styled.Description typographyVariant={typography[size].description}>
        {" "}
        {description}
      </Styled.Description>
      {link && (
        <Styled.Link variant={variant} href={link.href}>
          {link.text}
        </Styled.Link>
      )}
      {button && (
        <Styled.Button
          variant={variant}
          size={size}
          favorite={favorite}
          onClick={handleClick}
        >
          {button.icon}
        </Styled.Button>
      )}
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
  button: shape({
    icon: func,
    onClick: func,
  }),
  variant: oneOf(["primary", "secondary"]),
  size: oneOf(["small", "medium", "large"]),
}

Component.defaultProps = {
  variant: "primary",
  size: "medium",
  link: null,
  button: null,
}

export default Component
