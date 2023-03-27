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
            heading="Zaangażuj się i zmieniaj życie zwierząt razem z nami"
            headingTag="h1"
            headingColor={theme.colors.gray[600]}
            subtitle="Ty też możesz pomagać"
            size="large"
            tabletLayout="left"
            mobileLayout="left"
          />
        </Styled.HeaderWrapper>
      </Container>
    </Styled.Wrapper>
  )
}

export default Hero
