import { string, oneOf, node, oneOfType, object } from "prop-types"

import Illustration from "design-system/components/illustration"
import * as Styled from "./Card.styled"

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
      <Styled.Wrapper layout={layout}>
        {title}
        {children}
      </Styled.Wrapper>

      {button && button}
    </Styled.ContentContainer>
  </Styled.Card>
)

Card.propTypes = {
  /**
   * The main heading of the card.
   */
  title: node.isRequired,
  bgColor: oneOfType([object, string]),
  button: node,
  children: node,
  /**
   * The URL that the card should redirect to when clicked.
   */
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
