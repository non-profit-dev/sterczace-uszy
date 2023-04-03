import { useTheme } from "@emotion/react"
import Typography from "design-system/components/typography"
import Feature from "design-system/patterns/feature"
import List from "design-system/components/list"
import * as Styled from "./Values.styled"

const Values = () => {
  const theme = useTheme()

  const values = [
    {
      heading: "Miłość",
      description:
        "Kieruje naszą pasją i zaangażowaniem w ratowanie zwierząt, a każdego podopiecznego traktujemy z uczuciem i troską.",
      icon: "love",
    },
    {
      heading: "Odpowiedzialność",
      description:
        "Ponosimy pełną odpowiedzialność za wszystkie nasze działania i decyzje.",
      icon: "responsibility",
    },
    {
      heading: "Zaufanie",
      description:
        "Budujemy zaufanie poprzez uczciwe i przejrzyste działanie, zawsze trzymając się naszych wartości.",
      icon: "transparency",
    },
    {
      heading: "Transparentność",
      description:
        "Jesteśmy otwarte i uczciwe wobec naszych darczyńców, wolontariuszy, rodzin adopcyjnych i społeczności.",
      icon: "trust",
    },
  ]

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
          <List gap={40}>
            {values.map(({ heading, description, icon }) => (
              <Feature
                key={heading}
                heading={heading}
                description={description}
                icon={icon}
              />
            ))}
          </List>
        </Styled.FeatureWrapper>
      </Styled.Wrapper>
    </Styled.ContainerSection>
  )
}

export default Values
