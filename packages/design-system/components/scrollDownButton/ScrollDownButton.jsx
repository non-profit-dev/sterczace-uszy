import { string, oneOf } from "prop-types"

import Icon from "design-system/components/icon"

import theme from "../../tokens/theme"

import * as Styled from "./ScrollDownButton.styled"

const ScrollDownButton = ({ href, ariaLabel, className, size }) => (
  <Styled.ScrollDownButton
    href={href}
    aria-label={ariaLabel}
    className={className}
  >
    {/* <Styled.Icon size="medium" color={theme.colors.primary[300]}> */}
    <Icon name="doubleVector" size={size} color={theme.colors.neutrals[100]} />
    {/* </Styled.Icon> */}
  </Styled.ScrollDownButton>
)

ScrollDownButton.propTypes = {
  /**
   * The URL that the component should redirect to when clicked.
   */
  href: string,
  size: oneOf(["small", "medium", "large"]),
  /**
   * It's used to provide a text description for assistive technologies, like screen readers.
   */
  ariaLabel: string.isRequired,
  className: string,
}

ScrollDownButton.defaultProps = {
  href: null,
  className: null,
  size: "small",
}

export default ScrollDownButton
