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
        <Styled.Image src={imageSrc} alt="" />
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
   * The Title component used as a heading of the card.
   */
  title: node.isRequired,
  /**
   * The Button component used to encourage users to click the card.
   */
  button: node,
  /**
   * The content of the card.
   */
  children: node,
  /**
   * The URL that the card should redirect to when clicked. When provided, the card has a white background and a shadow.
   */
  href: string,
  /**
   * The name of an illustration from our gallery. If you need to display an illustration from another source, please use the `illustrationSrc` property.
   */
  illustrationName: string,
  /**
   * The path to an illustration from outside of our repository.
   */
  illustrationSrc: string,
  illustrationSize: oneOf(["small", "large"]),
  imageSrc: string,
  /**
   * The alignment of the card, used for all breakpoints.
   */
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
  imageSrc: null,
  layout: "left",
  className: null,
}

export default Card
