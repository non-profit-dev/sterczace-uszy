import { useState } from "react"
import { string, oneOf, shape, func, bool } from "prop-types"

import * as Styled from "./Button.styled"

const Button = ({
  link,
  text,
  iconStart,
  iconEnd,
  variant,
  color,
  size,
  active,
}) => {
  const [expanded, setExpanded] = useState(false)

  const handleClick = () => {
    setExpanded(!expanded)
  }

  return link ? (
    <Styled.Component
      variant={variant}
      color={color}
      size={size}
      active={active}
    >
      {iconStart && (
        <Styled.Button
          variant={variant}
          color={color}
          size={size}
          expanded={expanded}
          onClick={handleClick}
        >
          <iconStart.icon />
        </Styled.Button>
      )}
      <Styled.Link variant={variant} color={color} size={size} href={link}>
        {text}
      </Styled.Link>
      {iconEnd && (
        <Styled.Button
          variant={variant}
          color={color}
          size={size}
          expanded={expanded}
          onClick={handleClick}
        >
          <iconEnd.icon />
        </Styled.Button>
      )}
      {expanded === true && <Styled.Dropdown>Example dropdown</Styled.Dropdown>}
    </Styled.Component>
  ) : (
    <Styled.Component
      variant={variant}
      color={color}
      size={size}
      active={active}
      onClick={handleClick}
    >
      {iconStart && (
        <Styled.Button
          variant={variant}
          color={color}
          size={size}
          expanded={expanded}
        >
          <iconStart.icon />
        </Styled.Button>
      )}
      <Styled.Link as="span" variant={variant} color={color} size={size}>
        {text}
      </Styled.Link>
      {iconEnd && (
        <Styled.Button
          variant={variant}
          color={color}
          size={size}
          expanded={expanded}
        >
          <iconEnd.icon />
        </Styled.Button>
      )}
      {expanded === true && <Styled.Dropdown>Example dropdown</Styled.Dropdown>}
    </Styled.Component>
  )
}

Button.propTypes = {
  text: string.isRequired,
  link: string,
  iconStart: shape({
    icon: func,
    onClick: func,
  }),
  iconEnd: shape({
    icon: func,
    onClick: func,
  }),
  variant: oneOf(["fill", "border", "text", "textLine"]),
  color: oneOf(["primary", "black", "white"]),
  size: oneOf(["small", "medium", "large"]),
  active: bool,
}

Button.defaultProps = {
  link: null,
  iconStart: null,
  iconEnd: null,
  variant: "fill",
  color: "primary",
  size: "medium",
  active: null,
}

export default Button
