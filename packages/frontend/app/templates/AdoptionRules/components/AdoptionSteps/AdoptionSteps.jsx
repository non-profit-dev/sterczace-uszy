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
    illustration: "online",
    title: "Ankieta online",
    steps: [
      "wybrałeś pupila",
      "wypełniasz i przesyłasz ankietę",
      "czekasz na maila z akceptacją",
    ],
    button: (
      <Button
        variant="text"
        text="Wypełnij ankietę online"
        iconEnd="externalLink"
        target="_blank"
        href={globalData.surveys.preAdoption}
      />
    ),
  },
  {
    illustration: "newHome",
    title: "Wizyta przed adopcją",
    steps: ["ustalamy termin", "sprawdzamy warunki", "poznajemy się lepiej"],
    button: (
      <Button
        variant="fill"
        size="small"
        text="Dowiedz się więcej"
        href="/wizyta-przedadopcyjna"
      />
    ),
  },
  {
    illustration: "petInfo",
    title: "Umowa online",
    steps: [
      "wysyłamy umowę na maila",
      "podpisujesz umowę online",
      "odbierasz pupila",
    ],
    button: (
      <Button
        variant="text"
        text="Zapoznaj się z umową"
        iconEnd="externalLink"
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
          heading="Już wybrałeś? Teraz czas na kolejne kroki..."
          tabletLayout="left"
          mobileLayout="left"
        >
          Wypełnienie ankiety online, wizyta przedadopcyjna i podpisanie umowy
          przesłanej na Twojego maila to najważniejsze kroki adopcji, które
          pozwolą Ci adoptować wybrane zwierzę.
        </TextBanner>
      </Styled.TextBanner>

      <Styled.Steps>
        {data.map(({ illustration, title, steps, button }) => (
          <Styled.CardWrapper key={title}>
            <Styled.Illustration>
              <Illustration name={illustration} />
            </Styled.Illustration>
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
