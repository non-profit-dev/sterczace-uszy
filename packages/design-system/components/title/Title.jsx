import { string, oneOf, number } from "prop-types"

import Icon from "design-system/components/icon"
import Badge from "design-system/components/badge"
import Count from "design-system/components/count"

import * as Styled from "./Title.styled"

const Title = ({ text, badge, iconStart, iconEnd, size, variant, count }) => (
  <Styled.Title size={size} fullWidth={!!badge}>
    <Styled.Wrapper>
      {iconStart && <Icon name={iconStart} size={size} />}
      {count && <Count count={count} size={size} />}
      <Styled.Text size={size} variant={variant}>
        {text}
      </Styled.Text>
      {iconEnd && <Icon name={iconEnd} size={size} />}
    </Styled.Wrapper>

    {badge && <Badge text={badge} size="small" />}
  </Styled.Title>
)

Title.propTypes = {
  text: string.isRequired,
  badge: string,
  iconStart: string,
  iconEnd: string,
  count: number,
  size: oneOf(["small", "medium", "large"]),
  variant: oneOf(["text", "textLine"]),
}

Title.defaultProps = {
  badge: null,
  iconStart: null,
  iconEnd: null,
  count: null,
  size: "medium",
  variant: "textLine",
}

export default Title
