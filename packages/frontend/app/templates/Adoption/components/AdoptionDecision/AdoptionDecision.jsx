import { useTheme } from "@emotion/react"
import Accordion from "design-system/components/accordion"
import Feature from "design-system/patterns/feature"
import List from "design-system/components/list"
import ListItem from "design-system/components/listItem"
import * as Styled from "./AdoptionDecision.styled"

const AdoptionDecision = () => {
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
  ]

  return (
    <Styled.ContainerSection as="section">
      <Styled.Banner
        heading="Decyzja o adopcji psa"
        descriptionColor={theme.colors.gray[600]}
        size="medium"
        layout="left"
        mobileLayout="left"
        tabletLayout="left"
      >
        Adopcja psa wymaga odpowiedzialnego podejścia i przemyślenia kilku
        kwestii, poniżej znajdziesz wskazówki, które mogą być pomocne w podjęciu
        decyzji.
      </Styled.Banner>
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
      <Accordion
        color="black"
        activeColor="black"
        heading="Zastanów się nad adopcją wspólnie z każdym członkiem rodziny"
        shadow
      >
        <Styled.AccordionText variant="bodySmall">
          Adopcja psa wpływa na życie całej rodziny, dlatego powinna być
          omówiona wspólnie i ostatecznie zostać podjęta przez osobę dorosłą.
          Podczas takiej rozmowy ustalcie:
        </Styled.AccordionText>
        <Styled.TextList gap={4}>
          <ListItem variant="gray" iconName="check">
            Jakie jest nasze doświadczenie związane z posiadaniem zwierząt w
            domu? Czy jesteśmy w stanie zapewnić mu potrzebną opiekę, trening i
            wychowanie?
          </ListItem>
          <ListItem variant="gray" iconName="check">
            Kto będzie głównym opiekunem psa? Kto będzie odpowiadał za codzienną
            opiekę, wychowanie i spacery?
          </ListItem>
          <ListItem variant="gray" iconName="check">
            Czy członkowie rodziny są wolni od alergii na sierść?
          </ListItem>
          <ListItem variant="gray" iconName="check">
            Jaki będzie nasz plan w przypadku wyjazdów lub wakacji? Czy mamy
            kogoś, kto może się zająć psem podczas naszej nieobecności, czy
            będziemy podróżować z psem?
          </ListItem>
          <ListItem variant="gray" iconName="check">
            Przemyślcie z jakim usposobieniem psa chcecie adoptować, aby pasował
            do stylu życia rodziny.
          </ListItem>
        </Styled.TextList>
      </Accordion>
    </Styled.ContainerSection>
  )
}

export default AdoptionDecision
