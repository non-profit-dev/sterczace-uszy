import Container from "design-system/components/container"

import TextBanner from "design-system/patterns/textBanner"

import * as Styled from "./Hero.styled"

const Hero = () => (
  <Styled.Header>
    <Container>
      <Styled.HeaderWrapper>
        <TextBanner
          heading="Znalazły dom"
          subtitle="Zaopiekowani wybrańcy"
          size="large"
          tabletLayout="left"
          mobileLayout="left"
        >
          Pozostajemy w stałym kontakcie z rodzinami, które zdecydowały się na
          adopcję. Pomagamy, doradzamy i z radością słuchamy szczęśliwych
          opowieści.
        </TextBanner>
      </Styled.HeaderWrapper>
    </Container>
  </Styled.Header>
)

export default Hero
