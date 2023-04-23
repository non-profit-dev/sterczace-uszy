import Container from "design-system/components/container"
import Title from "design-system/components/title"
import Button from "design-system/components/button"
import List from "design-system/components/list"
import ListItem from "design-system/components/listItem"
import Illustration from "design-system/components/illustration"

import TextBanner from "design-system/patterns/textBanner"
import Card from "design-system/patterns/card"
import globalData from "shared/data"

import * as Styled from "./AdoptionRules.styled"

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

const AdoptionRules = () => (
  <Styled.Section>
    <Container>
      <Styled.TextBanner>
        <TextBanner
          heading="Zasady adopcji"
          tabletLayout="center"
          mobileLayout="center"
        >
          Poniżej znajdziesz niezbędne dokumenty, abyśmy mogły powierzyć w Twoje
          ręce wybrane zwierzę.
        </TextBanner>
      </Styled.TextBanner>

      <Styled.Steps>
        {data.map(({ title, steps, button }, index) => (
          <div key={title}>
            <Styled.Count size="small" count={index + 1} />
            <Card
              key={title}
              tabletLayout="center"
              mobileLayout="center"
              title={<Title text={title} variant="text" as="h3" />}
            >
              <List>
                {steps.map((step) => (
                  <ListItem key={step} iconName="check" variant="gray">
                    {step}
                  </ListItem>
                ))}
              </List>
              {button}
            </Card>
          </div>
        ))}
      </Styled.Steps>

      <Styled.FinalStep>
        <TextBanner
          heading="Masz nowego wiernego przyjaciela"
          size="small"
          tabletLayout="center"
          mobileLayout="center"
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
export default AdoptionRules
