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
            heading="Ankiety adopcyjne"
            tabletLayout="left"
            mobileLayout="left"
          >
            Tutaj znajdziesz ankiety adopcyjne i niezbędne informacje, aby je
            wysłać do fundacji.
          </TextBanner>
        </Styled.TextWrapper>

        <Styled.Image>
          <Image src="/documents/Hero.png" alt="" />
        </Styled.Image>
      </Styled.Wrapper>
    </Container>
  </Styled.Hero>
)

export default Hero