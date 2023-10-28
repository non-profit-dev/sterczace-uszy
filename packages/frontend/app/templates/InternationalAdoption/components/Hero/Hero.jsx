import Container from "design-system/components/container"
import { useTheme } from "@emotion/react"

import TextBanner from "design-system/patterns/textBanner"
import { useMediaQuery } from "usehooks-ts"

import * as Styled from "./Hero.styled"

const Hero = () => {
  const theme = useTheme()
  const isDesktop = useMediaQuery(`(min-width: 744px)`)
  return (
    <Styled.Header>
      <Container>
        <Styled.HeaderWrapper>
          <TextBanner
            heading="Adopcja za granicę"
            descriptionColor={
              isDesktop ? theme.colors.neutrals[100] : theme.colors.gray[600]
            }
            headingColor={
              isDesktop ? theme.colors.neutrals[100] : theme.colors.gray[600]
            }
            subtitle="WYJAZD POZA POLSKĘ"
            size="large"
            tabletLayout="left"
            mobileLayout="left"
          >
            Nowy dom to ciepło i miłość właściciela, nie ma znaczenia, czy
            będzie blisko, czy daleko. Możesz zapewnić swojemu pupilowi
            wymarzony dom, gdzie tylko zapragniesz.
          </TextBanner>
        </Styled.HeaderWrapper>
      </Container>
      <Styled.HeroMobileBackground />
    </Styled.Header>
  )
}

export default Hero
