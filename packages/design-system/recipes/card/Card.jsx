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
  imageSrc,
  imageAlt,
}) => (
  <Styled.Card as={href ? `a` : `div`} shadow={!!href} bgColor={bgColor}>
    {illustrationName && (
      <Styled.IllustrationContainer>
        <Illustration name={illustrationName} />
      </Styled.IllustrationContainer>
    )}
    {imageSrc && (
      <Styled.ImageContainer>
        <Styled.Image src={imageSrc} alt={imageAlt} />
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
  imageAlt: string,
  imageSrc: string,
  layout: oneOf(["left", "center"]),
  bgColor: oneOfType([object, string]),
}

Card.defaultProps = {
  button: null,
  children: null,
  href: null,
  illustrationName: null,
  image: null,
  imageAlt: null,
  imageSrc: null,
  layout: "center",
  bgColor: "null",
}

export default Card
