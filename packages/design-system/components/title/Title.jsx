import { string, oneOf, number, bool } from "prop-types"

import Icon from "design-system/components/icon"
import Count from "design-system/components/count"

import * as Styled from "./Title.styled"

const getIconSize = (textSize) =>
  textSize === `h1` || textSize === `h2` || textSize === `h3`
    ? `xxlarge`
    : `medium`

const Title = ({
  text,
  iconStart,
  iconEnd,
  textSize,
  line,
  count,
  hideLineOnMobile,
  as,
  className,
}) => (
  <Styled.Title size={textSize} className={className}>
    <Styled.Wrapper>
      {iconStart && <Icon name={iconStart} size={getIconSize(textSize)} />}
      {count && <Count count={count} size="xsmall" />}
      <Styled.Text
        variant={textSize}
        line={line}
        hideLineOnMobile={hideLineOnMobile}
        as={as}
      >
        {text}
      </Styled.Text>
      {iconEnd && <Icon name={iconEnd} size={getIconSize(textSize)} />}
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
  textSize: oneOf([
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
  textSize: "h4",
  line: true,
  hideLineOnMobile: false,
  as: null,
  className: null,
}

export default Title
