import Container from "design-system/components/container"

import TextBanner from "design-system/patterns/textBanner"

import * as Styled from "./Hero.styled"

const Hero = () => (
  <Styled.Header>
    <Container>
      <Styled.HeaderWrapper>
        <TextBanner
          heading="Adopcja za granicę"
          subtitle="WYJAZD POZA POLSKĘ"
          size="large"
          tabletLayout="left"
          mobileLayout="left"
        >
          Nowy dom to ciepło i miłość właściciela, nie ma znaczenia, czy będzie
          blisko, czy daleko. Możesz zapewnić swojemu pupilowi wymarzony dom,
          gdzie tylko zapragniesz.
        </TextBanner>
      </Styled.HeaderWrapper>
    </Container>
    <Styled.HeroMobileBackground />
  </Styled.Header>
)

export default Hero
