import Container from "design-system/components/container"

import TextBanner from "design-system/patterns/textBanner"

import * as Styled from "./Hero.styled"

const Hero = () => (
  <Styled.Header>
    <Container>
      <Styled.HeaderWrapper>
        <TextBanner
          heading="Wsparcie rodzin adopcyjnych"
          subtitle="Po adopcji"
          size="large"
          tabletLayout="left"
          mobileLayout="left"
        >
          Kiedy dajecie dom zwierzakowi z naszej fundacji i otaczacie go
          miłością, nie zostajecie sami. Oferujemy wsparcie po adopcji w różnych
          formach, abyście czuli się pewnie i komfortowo w nowej roli opiekunów.
        </TextBanner>
      </Styled.HeaderWrapper>
    </Container>
    <Styled.HeroMobileBackground />
  </Styled.Header>
)

export default Hero
