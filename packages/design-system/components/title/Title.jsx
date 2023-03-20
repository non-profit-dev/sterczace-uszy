import { string, oneOf, number, bool } from "prop-types"

import Icon from "design-system/components/icon"
import Badge from "design-system/components/badge"
import Count from "design-system/components/count"

import * as Styled from "./Title.styled"

const Title = ({
  text,
  badge,
  iconStart,
  iconEnd,
  size,
  textSize,
  variant,
  count,
  hideLineOnMobile,
  className,
}) => (
  <Styled.Title size={textSize} fullWidth={!!badge} className={className}>
    <Styled.Wrapper>
      {iconStart && <Icon name={iconStart} size={size} />}
      {count && <Count count={count} variant="title" />}
      <Styled.Text
        size={size}
        variant={textSize}
        type={variant}
        hideLineOnMobile={hideLineOnMobile}
      >
        {text}
      </Styled.Text>
      {iconEnd && <Icon name={iconEnd} size={size} />}
    </Styled.Wrapper>

    {badge && <Badge text={badge} size="small" />}
  </Styled.Title>
)

Title.propTypes = {
  /**
   * Text that's displayed as the title.
   */
  text: string.isRequired,
  /**
   * If provided, it renders the Badge at the end of the component.
   */
  badge: string,
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
  size: oneOf(["small", "medium", "large", "xlarge", "xxlarge"]),
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
  variant: oneOf(["text", "textLine"]),
  hideLineOnMobile: bool,
  className: string,
}

Title.defaultProps = {
  badge: null,
  iconStart: null,
  iconEnd: null,
  count: null,
  size: "medium",
  textSize: "h4",
  variant: "textLine",
  hideLineOnMobile: false,
  className: null,
}

export default Title
