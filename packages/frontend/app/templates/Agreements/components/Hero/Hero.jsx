import Container from "design-system/components/container"
import Image from "design-system/components/image"

import TextBanner from "design-system/patterns/textBanner"

import * as Styled from "./Hero.styled"

const Hero = () => (
  <Styled.Hero>
    <Container>
      <Styled.Wrapper>
        <Styled.TextWrapper>
          <TextBanner
            size="large"
            heading="Umowy adopcyjne"
            tabletLayout="left"
            mobileLayout="left"
          >
            Tutaj znajdziesz umowy adopcyjne i niezbędne informacje, żeby
            dokończyć adopcje wybranego czworonoga.
          </TextBanner>
        </Styled.TextWrapper>

        <Styled.Image>
          <Image src="/agreements/Hero.png" alt="" />
        </Styled.Image>
      </Styled.Wrapper>
    </Container>
  </Styled.Hero>
)

export default Hero
