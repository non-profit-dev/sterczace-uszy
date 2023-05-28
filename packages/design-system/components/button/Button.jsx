import { string, oneOf, func, bool } from "prop-types"

import Icon from "design-system/components/icon"
import { icons } from "design-system/tokens/icons"

import * as Styled from "./Button.styled"

const sizes = {
  xsmall: "bodySmall",
  small: "h6",
  medium: "h5",
  large: "h4",
}

const Button = ({
  href,
  text,
  iconStart,
  iconEnd,
  variant,
  color,
  size,
  active,
  target,
  onClick,
  as,
  className,
}) => (
  <Styled.Component
    as={as || (href ? `a` : `button`)}
    variant={variant}
    color={color}
    size={size}
    href={href}
    target={href && target}
    onClick={onClick}
    className={className}
  >
    {iconStart && (
      <Styled.Icon size={size}>
        <Icon name={iconStart} size={size} />
      </Styled.Icon>
    )}
    <Styled.Text variant={variant} color={color} active={active}>
      <Styled.Typography variant={sizes[size]} as="span">
        {text}
      </Styled.Typography>
    </Styled.Text>

    {iconEnd && (
      <Styled.Icon size={size}>
        <Icon name={iconEnd} size={size} />
      </Styled.Icon>
    )}
  </Styled.Component>
)

Button.propTypes = {
  /**
   * The text to be displayed on the button.
   */
  text: string.isRequired,
  /**
   * The URL that the button should redirect to when clicked.
   */
  href: string,
  /**
   * The name of the icon to be displayed at the start of the button.
   */
  iconStart: oneOf(Object.keys(icons)),
  /**
   * The name of the icon to be displayed at the end of the button.
   */
  iconEnd: oneOf(Object.keys(icons)),
  variant: oneOf(["fill", "border", "text"]),
  color: oneOf(["primary", "black"]),
  size: oneOf(["xsmall", "small", "medium", "large"]),
  /**
   * A boolean value to determine if the button is active or not.
   */
  active: bool,
  /**
   * It specifies where to display the linked URL. It only applies if the href property is provided.
   */
  target: string,
  /**
   * A function that will be called when the button is clicked.
   */
  onClick: func,
  as: string,
  className: string,
}

Button.defaultProps = {
  href: null,
  iconStart: null,
  iconEnd: null,
  variant: "fill",
  color: "primary",
  size: "medium",
  active: null,
  target: null,
  onClick: null,
  as: null,
  className: null,
}

export default Button
