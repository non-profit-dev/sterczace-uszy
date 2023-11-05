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
              heading="Zostań częścią społeczności"
              headingColor={theme.colors.gray[600]}
              subtitle="Wolontariat"
              size="large"
              tabletLayout="left"
              mobileLayout="left"
            >
              Pomoc zwierzętom to ciągłe wyzwania. Każdego dnia mierzymy się z
              nowymi problemami, ale wierzymy, że dzięki wsparciu innych osób
              możemy realizować naszą misję. Sprawdź jak możesz się zaangażować.
            </TextBanner>
          </Styled.TextBannerWrapper>

          <Styled.ImageWrapper>
            <Image src="/volunteering/hero.svg" alt="" />
          </Styled.ImageWrapper>
        </Styled.HeaderWrapper>
      </Container>
    </Styled.Wrapper>
  )
}

export default Hero
