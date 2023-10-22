import Container from "design-system/components/container"
import Title from "design-system/components/title"
import Button from "design-system/components/button"
import List from "design-system/components/list"
import ListItem from "design-system/components/listItem"
import Illustration from "design-system/components/illustration"

import TextBanner from "design-system/patterns/textBanner"
import Card from "design-system/patterns/card"
import globalData from "shared/data"

import * as Styled from "./AdoptionSteps.styled"

const data = [
  {
    title: "Przesłanie ankiety",
    steps: ["pobierz plik", "wypełnij i wydrukuj", "odeślij na maila fundacji"],
    button: (
      <Button
        variant="text"
        text="Pobierz ankietę"
        iconStart="download"
        target="_blank"
        href={globalData.surveys.preAdoption}
      />
    ),
  },
  {
    title: "Wizyta przedadopcyjna",
    steps: ["ustalamy termin", "sprawdzamy warunki", "poznajemy się lepiej"],
  },
  {
    title: "Umowa adopcyjna",
    steps: ["omawiamy zasady", "podpisujemy dokumenty", "odbieramy pupila"],
    button: (
      <Button
        variant="text"
        text="Pobierz wzór umowy"
        iconStart="download"
        target="_blank"
        href={globalData.agreements.adoption}
      />
    ),
  },
]

const AdoptionSteps = () => (
  <Styled.Section>
    <Container>
      <Styled.TextBanner>
        <TextBanner
          heading="Kroki adopcji"
          tabletLayout="left"
          mobileLayout="left"
        >
          Tylko 3 proste kroki dzielą Cię, aby zostać szczęśliwym właścicielem
          czworonoga. Postępuj zgodnie z tymi wskazówkami.
        </TextBanner>
      </Styled.TextBanner>

      <Styled.Steps>
        {data.map(({ title, steps, button }, index) => (
          <Styled.CardWrapper key={title}>
            <Styled.Count size="small" count={index + 1} />
            <Card
              key={title}
              title={<Title text={title} line={false} as="h3" />}
              button={button}
            >
              <List>
                {steps.map((step) => (
                  <ListItem key={step} iconName="check" variant="gray">
                    {step}
                  </ListItem>
                ))}
              </List>
            </Card>
          </Styled.CardWrapper>
        ))}
      </Styled.Steps>

      <Styled.FinalStep>
        <TextBanner
          heading="Masz nowego wiernego przyjaciela!"
          size="small"
          tabletLayout="left"
          mobileLayout="left"
        >
          Możesz cieszyć się z obecności nowego członka Waszej rodziny. Miłość i
          dozgonne oddanie gwarantowane!
        </TextBanner>

        <Styled.IllustrationWrapper>
          <Illustration name="hugging" />
        </Styled.IllustrationWrapper>
      </Styled.FinalStep>
    </Container>
  </Styled.Section>
)
export default AdoptionSteps
