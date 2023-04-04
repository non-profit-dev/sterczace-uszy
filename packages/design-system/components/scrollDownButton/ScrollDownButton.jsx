import { string } from "prop-types"

import Icon from "design-system/components/icon"
import theme from "../../tokens/theme"

import * as Styled from "./ScrollDownButton.styled"

const ScrollDownButton = ({ sectionIdToScroll, ariaLabel, className }) => {
  const handleScrollToSection = () => {
    // const element = document.getElementsByClassName(scrollTo)
    const element = document.getElementsById(sectionIdToScroll)

    element.scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <Styled.ScrollDownButton
      onClick={() => handleScrollToSection()}
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
    </Styled.ScrollDownButton>
  )
}

ScrollDownButton.propTypes = {
  /**
   * The section id name that the component should scroll into when clicked.
   */
  sectionIdToScroll: string.isRequired,
  /**
   * It's used to provide a text description for assistive technologies, like screen readers.
   */
  ariaLabel: string.isRequired,
  className: string,
}

ScrollDownButton.defaultProps = {
  className: null,
}

export default ScrollDownButton
