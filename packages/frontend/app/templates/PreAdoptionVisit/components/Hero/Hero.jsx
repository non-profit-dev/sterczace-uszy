import Container from "design-system/components/container"
import Image from "design-system/components/image"

import TextBanner from "design-system/patterns/textBanner"

import * as Styled from "./Hero.styled"

const Hero = () => (
  <Styled.Header>
    <Container>
      <Styled.Columns>
        <Styled.HeaderWrapper>
          <TextBanner
            heading="Wizyta przedaadopcyjna"
            subtitle="rozmowa w twoim domu"
            size="large"
            tabletLayout="left"
            mobileLayout="left"
          >
            Wizyta pomaga nam poznać sie lepiej i pomóc Tobie rozwiać wszelkie
            wątpliwości zanim zwierzę trafi do nowego domu.
          </TextBanner>
        </Styled.HeaderWrapper>

        <Styled.ImageWrapper>
          <Image src="/pre-adoption-visit/hero.png" />
        </Styled.ImageWrapper>
      </Styled.Columns>
    </Container>
  </Styled.Header>
)

export default Hero
