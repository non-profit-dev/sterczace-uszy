import { string, oneOf, node, oneOfType, object, bool } from "prop-types"

import Illustration from "design-system/components/illustration"
import * as Styled from "./Card.styled"

const Card = ({
  button,
  hideButtonOnMobile,
  children,
  href,
  illustrationName,
  hideIllustrationOnMobile,
  mobileLayout,
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
    {illustrationName && (
      <Styled.IllustrationContainer
        hideIllustrationOnMobile={hideIllustrationOnMobile}
      >
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
      mobileLayout={mobileLayout}
      paddingTop={!imageSrc && !illustrationName}
    >
      <Styled.Wrapper layout={layout} mobileLayout={mobileLayout}>
        {title}
        {children}
      </Styled.Wrapper>

      <Styled.ButtonWrapper hideButtonOnMobile={hideButtonOnMobile}>
        {button && button}
      </Styled.ButtonWrapper>
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
  hideButtonOnMobile: bool,
  children: node,
  /**
   * The URL that the card should redirect to when clicked.
   */
  href: string,
  illustrationName: string,
  hideIllustrationOnMobile: bool,
  imageAlt: string,
  imageHeight: string,
  imageSrc: string,
  layout: oneOf(["left", "center"]),
  mobileLayout: oneOf(["left", "center"]),
  className: string,
}

Card.defaultProps = {
  bgColor: "null",
  button: null,
  hideButtonOnMobile: false,
  children: null,
  href: null,
  illustrationName: null,
  hideIllustrationOnMobile: false,
  imageAlt: null,
  imageHeight: null,
  imageSrc: null,
  layout: "left",
  mobileLayout: "center",
  layout: "center",
  className: null,
}

export default Card
