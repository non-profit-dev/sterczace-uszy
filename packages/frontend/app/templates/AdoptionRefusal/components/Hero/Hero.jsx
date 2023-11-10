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
            heading="Odmowa adopcji"
            subtitle="Przyczyny odmowy"
            size="large"
            tabletLayout="left"
            mobileLayout="left"
          >
            Negatywna odpowiedz nie oznacza, że nie nadajesz się do adopcji...
            Może wybrałeś pupila, który potrzebuje dużo opieki i troski, a Twój
            plan dnia na to nie pozwala? Sprawdz, co może powodować odmowę.
          </TextBanner>
        </Styled.HeaderWrapper>

        <Styled.ImageWrapper>
          <Image src="/adoption-refusal/hero.png" />
        </Styled.ImageWrapper>
      </Styled.Columns>
    </Container>
  </Styled.Header>
)

export default Hero
