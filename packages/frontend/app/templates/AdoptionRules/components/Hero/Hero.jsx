import Container from "design-system/components/container"

import TextBanner from "design-system/patterns/textBanner"

import * as Styled from "./Hero.styled"

const Hero = () => (
  <Styled.Header>
    <Container>
      <Styled.HeaderWrapper>
        <TextBanner
          heading="Zasady adopcji"
          subtitle="Prosta instrukcja"
          size="large"
          tabletLayout="left"
          mobileLayout="left"
        >
          Poniżej znajdziesz instrukcje i niezbędne dokumenty, abyśmy mogły
          powierzyć w Twoje ręce wybrane zwierzę.
        </TextBanner>
      </Styled.HeaderWrapper>
    </Container>
    <Styled.HeroMobileBackground />
  </Styled.Header>
)

export default Hero
