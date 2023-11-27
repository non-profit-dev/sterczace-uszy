import Container from "design-system/components/container"

import TextBanner from "design-system/patterns/textBanner"

import * as Styled from "./Hero.styled"

const Hero = () => (
  <Styled.Header>
    <Container>
      <Styled.HeaderWrapper>
        <TextBanner
          heading="Poznaj nas lepiej"
          subtitle="Nasza Fundacja"
          size="large"
          tabletLayout="left"
          mobileLayout="left"
        >
          Nasza fundacja ma pewną historię, która ukształtowała nasze wartości.
          Mamy na koncie wiele sukcesów, którymi się chętnie dzielimy.
        </TextBanner>
      </Styled.HeaderWrapper>
    </Container>
    <Styled.HeroMobileBackground />
  </Styled.Header>
)

export default Hero
