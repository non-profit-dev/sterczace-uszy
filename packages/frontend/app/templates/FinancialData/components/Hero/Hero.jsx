import Container from "design-system/components/container"

import TextBanner from "design-system/patterns/textBanner"

import * as Styled from "./Hero.styled"

const Hero = () => (
  <Styled.Header>
    <Container>
      <Styled.HeaderWrapper>
        <TextBanner
          heading="Dane finansowe"
          subtitle="Nasza Fundacja"
          size="large"
          tabletLayout="left"
          mobileLayout="left"
        >
          Trzymamy rękę na pulsie i starannie notujemy nasze wydatki, które
          publikujemy w sprawozdaniach finansowych.
        </TextBanner>
      </Styled.HeaderWrapper>
    </Container>
    <Styled.HeroMobileBackground />
  </Styled.Header>
)

export default Hero
