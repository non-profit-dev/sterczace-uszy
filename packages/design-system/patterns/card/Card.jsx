import {
  string,
  oneOf,
  node,
  oneOfType,
  object,
  bool,
  number,
} from "prop-types"

import Illustration from "design-system/components/illustration"
import Icon from "design-system/components/icon"

import * as Styled from "./Card.styled"

const Card = ({
  button,
  hideButtonOnMobile,
  children,
  href,
  illustrationName,
  illustrationSrc,
  illustrationHeight,
  hideIllustrationOnMobile,
  mobileLayout,
  tabletLayout,
  layout,
  title,
  bgColor,
  imageSrc,
  imageAlt,
  imageHeight,
  mobileTitle,
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
        hideIllustrationOnMobile={hideIllustrationOnMobile}
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
        <Styled.Title hideOnMobile={!!mobileTitle}>{title}</Styled.Title>
        {mobileTitle && (
          <Styled.MobileTitle>
            {mobileTitle} <Icon name="arrowRight" />
          </Styled.MobileTitle>
        )}

        {children}
      </Styled.Wrapper>

      {button && (
        <Styled.ButtonWrapper hideButtonOnMobile={hideButtonOnMobile}>
          {button}
        </Styled.ButtonWrapper>
      )}
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
  illustrationSrc: string,
  illustrationHeight: number,
  hideIllustrationOnMobile: bool,
  imageAlt: string,
  imageHeight: string,
  imageSrc: string,
  layout: oneOf(["left", "center"]),
  mobileLayout: oneOf(["left", "center"]),
  tabletLayout: oneOf(["left", "center"]),
  mobileTitle: node,
  className: string,
}

Card.defaultProps = {
  bgColor: "null",
  button: null,
  hideButtonOnMobile: false,
  children: null,
  href: null,
  illustrationName: null,
  illustrationSrc: null,
  illustrationHeight: null,
  hideIllustrationOnMobile: false,
  imageAlt: null,
  imageHeight: null,
  imageSrc: null,
  layout: "left",
  mobileLayout: "center",
  tabletLayout: "center",
  mobileTitle: null,
  className: null,
}

export default Card
