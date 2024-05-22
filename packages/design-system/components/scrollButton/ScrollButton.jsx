import { string } from "prop-types"

import Icon from "design-system/components/icon"
import theme from "../../tokens/theme"

import * as Styled from "./ScrollButton.styled"

const ScrollButton = ({ sectionId, ariaLabel, className }) => (
  <Styled.ScrollButton
    href={`#${sectionId}`}
    aria-label={ariaLabel}
    className={className}
  >
    <Styled.Icon>
      <Icon
        name="doubleVector"
        size="medium"
        color={theme.colors.neutrals[100]}
      />
    </Styled.Icon>
  </Styled.ScrollButton>
)

ScrollButton.propTypes = {
  /**
   * The section id name that the component should scroll into when clicked.
   */
  sectionId: string.isRequired,
  /**
   * It's used to provide a text description for assistive technologies, like screen readers.
   */
  ariaLabel: string,
  className: string,
}

ScrollButton.defaultProps = {
  className: null,
  ariaLabel: "Przejdź do kolejnej sekcji",
}

export default ScrollButton
