import { string, oneOf } from "prop-types"

import Icon from "../icon/Icon"
import Badge from "../badge/Badge"

import * as Styled from "./Title.styled"

const Title = ({ text, badge, iconStart, iconEnd, size }) => (
  <Styled.Title size={size} fullWidth={!!badge}>
    <Styled.Wrapper>
      {iconStart && <Icon name={iconStart} size={size} />}
      <Styled.Text size={size}>{text}</Styled.Text>
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
  size: oneOf(["small", "medium", "large"]),
}

Title.defaultProps = {
  badge: null,
  iconStart: null,
  iconEnd: null,
  size: "medium",
}

export default Title
