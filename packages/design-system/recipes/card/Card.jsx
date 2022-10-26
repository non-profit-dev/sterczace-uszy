import { string, oneOf, node, oneOfType, object } from "prop-types"

import * as Styled from "./Card.styled"
import Illustration from "../../components/illustrations/Illustration"

const Card = ({
  button,
  children,
  href,
  illustrationName,
  image,
  layout,
  title,
  bgColor,
}) => (
  <Styled.Card as={href ? `a` : `div`} shadow={!!href} bgColor={bgColor}>
    {illustrationName && (
      <Styled.IllustrationContainer>
        <Illustration name={illustrationName} />
      </Styled.IllustrationContainer>
    )}
    {image && (
      <Styled.ImageContainer>
        <Illustration name="heartWithDogFace" />
      </Styled.ImageContainer>
    )}
    <Styled.ContentContainer layout={layout}>
      {title && title}
      {children}
      {button && button}
    </Styled.ContentContainer>
  </Styled.Card>
)

Card.propTypes = {
  title: node.isRequired,
  button: node,
  children: node,
  href: string,
  illustrationName: string,
  image: node,
  layout: oneOf(["left", "center"]),
  bgColor: oneOfType([object, string]),
}

Card.defaultProps = {
  button: null,
  children: null,
  href: null,
  illustrationName: null,
  image: null,
  layout: "center",
  bgColor: "null",
}

export default Card
