import { useTheme } from "@emotion/react"

import Button from "design-system/components/button"
import Typography from "design-system/components/typography"
import Container from "design-system/components/container"

import TextBanner from "design-system/patterns/textBanner"

import * as Styled from "./Microchips.styled"

const Microchips = () => {
  const theme = useTheme()

  return (
    <section>
      <Styled.Banner>
        <picture>
          <source
            srcSet="/about/safe-animal-desktop.png"
            media="(min-width: 1200px)"
          />
          <source
            srcSet="/about/safe-animal-tablet.png"
            media="(min-width: 587px)"
          />
          <Styled.Image src="/about/safe-animal-mobile.png" alt="" />
        </picture>
      </Styled.Banner>

      <Container>
        <Styled.TextWrapper>
          <TextBanner
            heading="Zniżka na rejestrację mikroczipa"
            headingColor={theme.colors.gray[600]}
            descriptionColor={theme.colors.gray[600]}
            size="medium"
            button={
              <Button
                text="Skontaktuj się z nami"
                color="primary"
                href="/kontakt"
                size="large"
              />
            }
          >
            <Typography variant="bodyTitle">
              Mikroczip pozwala w łatwy sposób odnaleźć właściciela, kiedy
              zwierzę zostanie zagubione. Międzynarodowa Baza Danych SAFE-ANIMAL
              nadzoruje elektroniczny system znakowania zwierząt czipem w
              Polsce.
            </Typography>

            <Typography variant="bodyTitle">
              Jeśli chcesz oznaczyć swojego pupila mikrochipem poproś fundację o
              kod promocyjny, który zapewni zniżkę w wysokości 10% przy
              rejestracji w bazie danych. Możesz poprosić o dowolną ilość kodów
              promocyjnych.
            </Typography>
          </TextBanner>
        </Styled.TextWrapper>
      </Container>
    </section>
  )
}

export default Microchips
