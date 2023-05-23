import { string, oneOf, node } from "prop-types"

import Illustration from "design-system/components/illustration"

import * as Styled from "./Card.styled"

const Card = ({
  button,
  children,
  href,
  illustrationName,
  illustrationSrc,
  illustrationSize,
  layout,
  title,
  imageSrc,
  imageAlt,
  imageHeight,
  className,
}) => (
  <Styled.Card
    as={href ? `a` : `div`}
    linkStyle={!!href}
    href={href}
    className={className}
  >
    {(illustrationName || illustrationSrc) && (
      <Styled.IllustrationContainer size={illustrationSize}>
        {illustrationName && <Illustration name={illustrationName} />}

        {illustrationSrc && (
          <img src={illustrationSrc} alt="" width="100%" height="100%" />
        )}
      </Styled.IllustrationContainer>
    )}
    {imageSrc && (
      <Styled.ImageContainer>
        <Styled.Image src={imageSrc} alt={imageAlt} imageHeight={imageHeight} />
      </Styled.ImageContainer>
    )}
    <Styled.ContentContainer
      layout={layout}
      paddingTop={!imageSrc && !illustrationName && !illustrationSrc}
    >
      <Styled.Wrapper layout={layout}>
        <Styled.Title>{title}</Styled.Title>
        {children}
      </Styled.Wrapper>

      {button}
    </Styled.ContentContainer>
  </Styled.Card>
)

Card.propTypes = {
  /**
   * The main heading of the card.
   */
  title: node.isRequired,
  button: node,
  children: node,
  /**
   * The URL that the card should redirect to when clicked.
   */
  href: string,
  illustrationName: string,
  illustrationSrc: string,
  illustrationSize: oneOf(["small", "large"]),
  imageAlt: string,
  imageHeight: string,
  imageSrc: string,
  layout: oneOf(["left", "center"]),
  className: string,
}

Card.defaultProps = {
  button: null,
  children: null,
  href: null,
  illustrationName: null,
  illustrationSrc: null,
  illustrationSize: "small",
  imageAlt: null,
  imageHeight: null,
  imageSrc: null,
  layout: "left",
  className: null,
}

export default Card
