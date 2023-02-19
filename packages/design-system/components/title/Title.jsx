import { string, oneOf, number } from "prop-types"

import Icon from "design-system/components/icon"
import Badge from "design-system/components/badge"
import Count from "design-system/components/count"

import * as Styled from "./Title.styled"

const Title = ({
  text,
  badge,
  iconStart,
  iconEnd,
  iconSize,
  size,
  variant,
  count,
  className,
}) => (
  <Styled.Title size={size} fullWidth={!!badge} className={className}>
    <Styled.Wrapper>
      {iconStart && <Icon name={iconStart} size={iconSize} />}
      {count && <Count count={count} size={iconSize} />}
      <Styled.Text size={size} variant={variant}>
        {text}
      </Styled.Text>
      {iconEnd && <Icon name={iconEnd} size={iconSize} />}
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
  iconSize: oneOf(["small", "medium", "large", "xlarge", "xxlarge"]),
  size: oneOf([
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
  className: string,
}

Title.defaultProps = {
  badge: null,
  iconStart: null,
  iconEnd: null,
  count: null,
  iconSize: "medium",
  size: "h4",
  variant: "textLine",
  className: null,
}

export default Title
