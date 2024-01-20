import { string } from "prop-types"

import Container from "design-system/components/container"
import Image from "design-system/components/image"

import TextBanner from "design-system/patterns/textBanner"

import * as Styled from "./Hero.styled"

const Hero = ({
  heading,
  subtitle,
  description,
  backgroundImage,
  backgroundColor,
  backgroundMobile,
  asset,
}) => (
  <Styled.Header
    backgroundImage={backgroundImage}
    backgroundColor={backgroundColor}
  >
    <Container>
      <Styled.Grid alignement={asset ? "center" : "start"}>
        <Styled.Content>
          <TextBanner
            heading={heading}
            subtitle={subtitle}
            size="large"
            tabletLayout="left"
            mobileLayout="left"
          >
            {description}
          </TextBanner>
        </Styled.Content>

        {asset ? (
          <Styled.Asset>
            <Image src={asset} />
          </Styled.Asset>
        ) : null}
      </Styled.Grid>
    </Container>

    {backgroundMobile ? (
      <Styled.HeroMobileBackground background={backgroundMobile} />
    ) : null}
  </Styled.Header>
)

Hero.propTypes = {
  heading: string.isRequired,
  subtitle: string,
  description: string,
  /**
   * The source path for the background image, larger breakpoints only.
   */
  backgroundImage: string,
  /**
   * The background color based on `theme.colors` values.
   */
  backgroundColor: string,
  /**
   * The source path for the image that should be placed below the hero's content, visible on mobile breakpoints.
   */
  backgroundMobile: string,
  /**
   * The source path for the asset that should be placed in the right column of the Hero.
   */
  asset: string,
}

Hero.defaultProps = {
  subtitle: null,
  description: null,
  backgroundImage: null,
  backgroundColor: null,
  backgroundMobile: null,
  asset: null,
}

export default Hero
