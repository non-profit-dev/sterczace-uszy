import { useTheme } from "@emotion/react"
import Typography from "design-system/components/typography"
import Feature from "design-system/patterns/feature"
import List from "design-system/components/list"
import * as Styled from "./Values.styled"

const Values = () => {
  const theme = useTheme()

  return (
    <Styled.ContainerSection as="section" size="medium">
      <Styled.Wrapper>
        <Styled.Banner
          heading="Pomagamy kierując się wartościami"
          subtitle="Nasze wartości"
          descriptionColor={theme.colors.gray[600]}
          size="medium"
          layout="left"
          mobileLayout="left"
          tabletLayout="left"
        >
          Stawiamy na dobre relacje i prowadzimy otwarty dialog z rodzinami
          adopcyjnymi. Angażujemy się w nasze działania z wielką pasją, dbając o
          dobre warunki i opiekę dla każdego zwierzaka, którego ratujemy.
          <Styled.TextBottomWrapper>
            <Typography variant="h5">
              Wartości stanowią podstawę naszej fundacji i kierują naszymi
              działaniami.
            </Typography>
          </Styled.TextBottomWrapper>
        </Styled.Banner>
        <Styled.Img alt="dog for values section" src="../about/values.png" />
        <Styled.FeatureWrapper>
          <List gap={30}>
            <Feature
              description="Kieruje naszą pasją i zaangażowaniem w ratowanie zwierząt, a każdego podopiecznego traktujemy z uczuciem i troską."
              heading="Miłość"
              icon="love"
            />
            <Feature
              description="Ponosimy pełną odpowiedzialność za wszystkie nasze działania i decyzje."
              heading="Odpowiedzialność"
              icon="responsibility"
            />
            <Feature
              description="Budujemy zaufanie poprzez uczciwe i przejrzyste działanie, zawsze trzymając się naszych wartości."
              heading="Zaufanie"
              icon="transparency"
            />
            <Feature
              description="Jesteśmy otwarte i uczciwe wobec naszych darczyńców, wolontariuszy, rodzin adopcyjnych i społeczności."
              heading="Transparentność"
              icon="trust"
            />
          </List>
        </Styled.FeatureWrapper>
      </Styled.Wrapper>
    </Styled.ContainerSection>
  )
}

export default Values
