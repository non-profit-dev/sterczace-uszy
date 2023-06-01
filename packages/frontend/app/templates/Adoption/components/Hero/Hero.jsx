import Container from "design-system/components/container"

import TextBanner from "design-system/patterns/textBanner"

import * as Styled from "./Hero.styled"

const Hero = () => (
  <Styled.Header>
    <Styled.HeroMobileBackground />

    <Container>
      <Styled.HeaderWrapper>
        <TextBanner
          heading="Co zrobić, aby adoptować?"
          subtitle="Prosta adopcja"
          size="large"
          tabletLayout="left"
          mobileLayout="left"
        >
          Masz wybrane zwierzę, które chcesz adoptować? Trzy proste kroki dzielą
          Cię od przytulenia nowego przyjaciela.
        </TextBanner>
      </Styled.HeaderWrapper>
    </Container>
  </Styled.Header>
)

export default Hero
