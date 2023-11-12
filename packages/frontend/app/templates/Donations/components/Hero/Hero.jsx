import { useTheme } from "@emotion/react"

import Container from "design-system/components/container"
import Image from "design-system/components/image"

import TextBanner from "design-system/patterns/textBanner"

import * as Styled from "./Hero.styled"

const Hero = () => {
  const theme = useTheme()

  return (
    <Styled.Wrapper>
      <Container as="header">
        <Styled.HeaderWrapper>
          <Styled.TextBannerWrapper>
            <TextBanner
              heading="Twoja pomoc ma moc!"
              headingColor={theme.colors.gray[600]}
              subtitle="Wsparcie finansowe"
              size="large"
              tabletLayout="left"
              mobileLayout="left"
            >
              Już teraz możesz zostać naszym superbohaterem! Wybierz dostępną
              dla Ciebie formę wsparcia finansowego i zmieniaj z nami życie
              potrzebujących zwierząt.
            </TextBanner>
          </Styled.TextBannerWrapper>

          <Styled.ImageWrapper>
            <Image src="/donations/hero.svg" alt="" />
          </Styled.ImageWrapper>
        </Styled.HeaderWrapper>
      </Container>
    </Styled.Wrapper>
  )
}

export default Hero
