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
    variant={variant}
    color={color}
    size={size}
    onClick={onClick}
  >
    {iconStart && (
      <Styled.Icon variant={variant} color={color} size={size}>
        {iconStart}
      </Styled.Icon>
    )}
    <Styled.Link
      as={href ? `a` : `button`}
      variant={variant}
      color={color}
      size={size}
      href={href}
      active={active}
    >
      {text}
    </Styled.Link>
    {iconEnd && (
      <Styled.Icon variant={variant} color={color} size={size}>
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
