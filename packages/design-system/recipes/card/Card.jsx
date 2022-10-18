import { string, oneOf } from "prop-types"

import * as Styled from "./Card.styled"
import Title from "../../components/title/Title"
import Icon from "../../components/icon/Icon"

const Card = ({ text, size, badge }) => (
  <Styled.Card>
    <Styled.ImageContainer>
      <Icon name="heart" size="large" />
    </Styled.ImageContainer>
    <Title text={text} size={size} badge={badge} />
  </Styled.Card>
)

Card.propTypes = {
  text: string.isRequired,
  badge: string,
  size: oneOf(["small", "medium", "large"]),
}

Card.defaultProps = {
  size: "medium",
  badge: null,
}

export default Card
