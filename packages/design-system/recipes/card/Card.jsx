import { string, oneOf, node, oneOfType, object } from "prop-types"

import * as Styled from "./Card.styled"
import Illustration from "../../components/illustrations/Illustration"

const Card = ({
  button,
  children,
  href,
  illustrationName,
  layout,
  title,
  bgColor,
  imageSrc,
  imageAlt,
  imageHeight,
}) => (
  <Styled.Card
    as={href ? `a` : `div`}
    linkStyle={!!href}
    bgColor={bgColor}
    href={href}
  >
    {illustrationName && (
      <Styled.IllustrationContainer>
        <Illustration name={illustrationName} />
      </Styled.IllustrationContainer>
    )}
    {imageSrc && (
      <Styled.ImageContainer>
        <Styled.Image src={imageSrc} alt={imageAlt} imageHeight={imageHeight} />
      </Styled.ImageContainer>
    )}
    <Styled.ContentContainer
      layout={layout}
      paddingTop={!imageSrc && !illustrationName}
    >
      {title}
      {children}
      {button && button}
    </Styled.ContentContainer>
  </Styled.Card>
)

Card.propTypes = {
  title: node.isRequired,
  bgColor: oneOfType([object, string]),
  button: node,
  children: node,
  href: string,
  illustrationName: string,
  imageAlt: string,
  imageHeight: string,
  imageSrc: string,
  layout: oneOf(["left", "center"]),
}

Card.defaultProps = {
  bgColor: "null",
  button: null,
  children: null,
  href: null,
  illustrationName: null,
  imageAlt: null,
  imageHeight: "auto",
  imageSrc: null,
  layout: "center",
}

export default Card
