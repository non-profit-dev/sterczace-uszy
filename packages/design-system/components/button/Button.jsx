import { string, oneOf, func, bool, node } from "prop-types"

import * as Styled from "./Button.styled"

const Button = ({
  href,
  text,
  iconStart,
  iconEnd,
  variant,
  color,
  size,
  active,
  onClick,
}) => (
  <Styled.Component
    as={href ? `a` : `button`}
    variant={variant}
    color={color}
    size={size}
    href={href}
    onClick={onClick}
  >
    {iconStart && (
      <Styled.Icon size={size} iconStart={iconStart}>
        {iconStart}
      </Styled.Icon>
    )}
    <Styled.Text variant={variant} color={color} active={active}>
      {text}
    </Styled.Text>
    {iconEnd && (
      <Styled.Icon size={size} iconEnd={iconEnd}>
        {iconEnd}
      </Styled.Icon>
    )}
  </Styled.Component>
)

Button.propTypes = {
  text: string.isRequired,
  href: string,
  iconStart: node,
  iconEnd: node,
  variant: oneOf(["fill", "border", "text", "textLine"]),
  color: oneOf(["primary", "black", "white"]),
  size: oneOf(["small", "medium", "large"]),
  active: bool,
  onClick: func,
}

Button.defaultProps = {
  href: null,
  iconStart: null,
  iconEnd: null,
  variant: "fill",
  color: "primary",
  size: "medium",
  active: null,
  onClick: null,
}

export default Button
