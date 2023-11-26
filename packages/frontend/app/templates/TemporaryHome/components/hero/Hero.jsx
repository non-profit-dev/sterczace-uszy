import { useTheme } from "@emotion/react"

import Container from "design-system/components/container"

import TextBanner from "design-system/patterns/textBanner"

import * as Styled from "./Hero.styled"

const Hero = () => {
  const theme = useTheme()

  return (
    <Styled.Wrapper>
      <Container as="header">
        <Styled.HeaderWrapper>
          <TextBanner
            heading="Pokaż jak
            wygląda miłość"
            headingColor={theme.colors.gray[600]}
            subtitle="Dom tymczasowy"
            size="large"
            tabletLayout="left"
            mobileLayout="left"
          >
            I nawet jeżeli tylko na chwilę, możesz zapewnić dom jakiego
            potrzebuje każdy z naszych podopiecznych. Sprawdź co możesz zrobić.
          </TextBanner>
        </Styled.HeaderWrapper>
      </Container>
      <Styled.HeroMobileBackground />
    </Styled.Wrapper>
  )
}

export default Hero
