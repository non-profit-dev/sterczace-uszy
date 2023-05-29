import { string, oneOf, number, bool } from "prop-types"

import Icon from "design-system/components/icon"
import Count from "design-system/components/count"

import * as Styled from "./Title.styled"

const getIconSize = (variant) =>
  variant === `h1` || variant === `h2` || variant === `h3`
    ? `xxlarge`
    : `medium`

const Title = ({
  text,
  iconStart,
  iconEnd,
  variant,
  line,
  count,
  hideLineOnMobile,
  as,
  className,
}) => (
  <Styled.Title className={className}>
    <Styled.Wrapper>
      {iconStart && <Icon name={iconStart} size={getIconSize(variant)} />}
      {count && <Count count={count} size="xsmall" />}
      <Styled.Text
        variant={variant}
        line={line}
        hideLineOnMobile={hideLineOnMobile}
        as={as}
      >
        {text}
      </Styled.Text>
      {iconEnd && <Icon name={iconEnd} size={getIconSize(variant)} />}
    </Styled.Wrapper>
  </Styled.Title>
)

Title.propTypes = {
  /**
   * Text that's displayed as the title.
   */
  text: string.isRequired,
  /**
   * The name of the icon to be displayed at the start of the title's text.
   */
  iconStart: string,
  /**
   * The name of the icon to be displayed at the end of the title's text.
   */
  iconEnd: string,
  /**
   * If provided, it renders the Count component at the start of the title's text.
   */
  count: number,
  variant: oneOf([
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "bodyLarge",
    "bodySmall",
    "bodyTitle",
    "bodyTiny",
  ]),
  line: bool,
  hideLineOnMobile: bool,
  as: string,
  className: string,
}

Title.defaultProps = {
  iconStart: null,
  iconEnd: null,
  count: null,
  variant: "h4",
  line: true,
  hideLineOnMobile: false,
  as: null,
  className: null,
}

export default Title
