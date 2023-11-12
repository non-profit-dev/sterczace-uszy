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
            heading="Adoptuj wirtualnie!"
            subtitle="Adopcja wirtualna"
            size="large"
            tabletLayout="left"
            mobileLayout="left"
          >
            Nie możesz adoptować? I tak możesz pomóc! Sprawdź, co możesz zrobić,
            aby pomagać naszym podopiecznym. Wybierz swojego pupila i adoptuj go
            wirtualnie.
          </TextBanner>
        </Styled.HeaderWrapper>

        <Styled.ImageWrapper>
          <Image src="/virtual-adoption/hero.png" />
        </Styled.ImageWrapper>
      </Styled.Columns>
    </Container>
  </Styled.Header>
)

export default Hero
