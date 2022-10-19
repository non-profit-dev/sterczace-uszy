import { string, oneOf, node } from "prop-types"

import * as Styled from "./Card.styled"
import Title from "../../components/title/Title"
import Icon from "../../components/icon/Icon"
import List from "../../components/list/List"

const Card = ({ text, size, badge, children }) => (
  <Styled.Card>
    <Styled.ImageContainer>
      <Icon name="heart" size="large" />
    </Styled.ImageContainer>
    <Styled.ContentContainer>
      <Title text={text} size={size} badge={badge} />
      <List>{children}</List>
    </Styled.ContentContainer>
  </Styled.Card>
)

Card.propTypes = {
  text: string.isRequired,
  badge: string,
  size: oneOf(["small", "medium", "large"]),
  children: node,
}

Card.defaultProps = {
  size: "medium",
  badge: null,
  children: null,
}

export default Card
