import Container from "design-system/components/container"

import TextBanner from "design-system/patterns/textBanner"

import * as Styled from "./Hero.styled"

const Hero = () => (
  <Styled.Header>
    <Container>
      <Styled.HeaderWrapper>
        <TextBanner
          heading="Zanim adoptujesz"
          subtitle="Przemyśl swoją decyzję"
          size="large"
          tabletLayout="left"
          mobileLayout="left"
        >
          Pierwszym i bardzo ważnym krokiem adopcji jest przemyślana decyzja.
          Zapoznaj się z naszym przewodnikiem, który ułatwi ci jej podjęcie.
        </TextBanner>
      </Styled.HeaderWrapper>
    </Container>

    <Styled.HeroMobileBackground />
  </Styled.Header>
)

export default Hero
