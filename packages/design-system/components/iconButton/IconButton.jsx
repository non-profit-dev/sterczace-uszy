import { string, oneOf, func } from "prop-types"

import Icon from "design-system/components/icon"
import { icons } from "design-system/tokens/icons"

import theme from "../../tokens/theme"

import * as Styled from "./IconButton.styled"

const IconButton = ({
  href,
  name,
  color,
  size,
  onClick,
  ariaLabel,
  className,
  target,
  title,
}) => (
  <Styled.IconButton
    as={href ? `a` : `button`}
    href={href}
    onClick={onClick}
    aria-label={ariaLabel}
    className={className}
    target={target}
    title={title}
  >
    <Icon name={name} size={size} color={color} />
  </Styled.IconButton>
)

IconButton.propTypes = {
  /**
   * The URL that the component should redirect to when clicked.
   */
  href: string,
  name: oneOf(Object.keys(icons)).isRequired,
  color: string,
  size: oneOf(["small", "medium", "large", "xlarge", "xxlarge"]),
  onClick: func,
  title: string,
  /**
   * It's used to provide a text description for assistive technologies, like screen readers.
   */
  ariaLabel: string.isRequired,
  className: string,
  target: string,
}

IconButton.defaultProps = {
  href: null,
  color: theme.colors.primary[500],
  size: "medium",
  onClick: null,
  className: null,
  target: null,
  title: null,
}

export default IconButton
