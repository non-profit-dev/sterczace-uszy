import { string, oneOf, node, oneOfType, object, number } from "prop-types"

import Illustration from "design-system/components/illustration"
import Icon from "design-system/components/icon"

import * as Styled from "./Card.styled"

const Card = ({
  button,
  children,
  href,
  illustrationName,
  illustrationSrc,
  illustrationHeight,
  mobileLayout,
  tabletLayout,
  layout,
  title,
  bgColor,
  imageSrc,
  imageAlt,
  imageHeight,
  className,
}) => (
  <Styled.Card
    as={href ? `a` : `div`}
    linkStyle={!!href}
    bgColor={bgColor}
    href={href}
    className={className}
  >
    {(illustrationName || illustrationSrc) && (
      <Styled.IllustrationContainer
        fixedSize={!!href}
        height={illustrationHeight}
      >
        {illustrationName && (
          <Illustration name={illustrationName} size="medium" />
        )}

        {illustrationSrc && <img src={illustrationSrc} alt="" />}
      </Styled.IllustrationContainer>
    )}
    {imageSrc && (
      <Styled.ImageContainer>
        <Styled.Image src={imageSrc} alt={imageAlt} imageHeight={imageHeight} />
      </Styled.ImageContainer>
    )}
    <Styled.ContentContainer
      layout={layout}
      mobileLayout={mobileLayout}
      tabletLayout={tabletLayout}
      paddingTop={!imageSrc && !illustrationName && !illustrationSrc}
    >
      <Styled.Wrapper
        layout={layout}
        tabletLayout={tabletLayout}
        mobileLayout={mobileLayout}
      >
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
  bgColor: oneOfType([object, string]),
  button: node,
  children: node,
  /**
   * The URL that the card should redirect to when clicked.
   */
  href: string,
  illustrationName: string,
  illustrationSrc: string,
  illustrationHeight: number,
  imageAlt: string,
  imageHeight: string,
  imageSrc: string,
  layout: oneOf(["left", "center"]),
  mobileLayout: oneOf(["left", "center"]),
  tabletLayout: oneOf(["left", "center"]),
  className: string,
}

Card.defaultProps = {
  bgColor: "null",
  button: null,
  children: null,
  href: null,
  illustrationName: null,
  illustrationSrc: null,
  illustrationHeight: null,
  imageAlt: null,
  imageHeight: null,
  imageSrc: null,
  layout: "left",
  mobileLayout: "center",
  tabletLayout: "center",
  className: null,
}

export default Card
