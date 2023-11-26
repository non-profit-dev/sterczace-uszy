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
            heading="Nie potrzeba wiele by pomóc"
            headingColor={theme.colors.gray[600]}
            subtitle="Pomagaj za darmo"
            size="large"
            tabletLayout="left"
            mobileLayout="left"
          >
            Wpłaty finansowe to nie jedyny sposób by nam pomóc. I choć wiemy, że
            w życiu bywa różnie, jedno zawsze pozostaje niezmienne - miłość do
            zwierząt. Sprawdź co możesz zrobić, aby wspierać naszych
            podopiecznych w każdej sytuacji.
          </TextBanner>
        </Styled.HeaderWrapper>
      </Container>
      <Styled.HeroMobileBackground />
    </Styled.Wrapper>
  )
}

export default Hero
