import { useTheme } from "@emotion/react"

import Container from "design-system/components/container"
import Title from "design-system/components/title"
import Button from "design-system/components/button"
import Illustration from "design-system/components/illustration"
import Typography from "design-system/components/typography"

import TextBanner from "design-system/patterns/textBanner"
import Card from "design-system/patterns/card"
import globalData from "shared/data"

import * as Styled from "./TemporaryHome.styled"

const steps = [
  {
    title: "Wypełnij ankietę",
    description:
      "Cieszymy się, że chcesz zostać domem tymczasowym. Dla dobra naszych podopiecznych musimy być jednak pewni, że spełniasz odpowiednie warunki. Dlatego prosimy Cię o odpowiedzenie na parę pytań. Uzupełnij ankietę i prześlij ją na naszego maila:  fundacjastercaceuszy@gmail.com",
    button: (
      <Button
        variant="text"
        text="Pobierz ankietę"
        iconStart="download"
        target="_blank"
        href={globalData.surveys.temporaryHome}
      />
    ),
  },
  {
    title: "Zdecyduj na jak długo",
    description:
      "Zostając domem tymczasowym deklarujesz jak długo jesteś w stanie zapewnić pomoc. Minimalny okres przyjęcia podopiecznego to 6 miesięcy. Pamiętaj jednak, że dom stały ma pierwszeństwo w adopcji zwierzaka, więc jeżeli się zakochasz i zdecydujesz zostać domem stałym daj nam koniecznie znać!",
  },
  {
    title: "Daj dom i miłość",
    description:
      "Fundacja zapewnia wszystkie najpotrzebniejsze rzeczy dla zwierząt - jedzenie, miski, zabawki, legowisko. Opłaca również wizyty u weterynarza (konieczne jest zbieranie faktur). Ty musisz wykazać się jedynie dużą dozą miłości i cierpliwości, by zostać nową bezpieczną przystanią w życiu zwierzaka - nawet na chwilę.",
  },
]

const TemporaryHome = () => {
  const theme = useTheme()

  return (
    <Container as="section" id="dom-tymczasowy">
      <Styled.Content>
        <TextBanner
          heading="Zostań domem tymczasowym"
          subtitle="Dom tymczasowy"
          tabletLayout="left"
          mobileLayout="left"
        >
          By skutecznie ratować psy i koty nie wystarczy je zabrać z koszmarnych
          warunków. Potrzeba też miejsca, by je ulokować do czasu adopcji, umyć,
          uspokoić i nakarmić. Domy tymczasowe to najczęściej pierwszy kontakt
          ze zwierzakami. To odpowiedzialna rola, bo to właśnie Dom Tymczasowy
          dba o zwierzę, pokazuje mu, że ludzie są fajni... Opisuje zachowania
          zwierzęcia, chodzi do weterynarza, daje szansę zwierzakowi na lepsze
          życie!
        </TextBanner>

        <Illustration name="dogRescue" />
      </Styled.Content>

      <Styled.Steps>
        {steps.map(({ title, description, button }, index) => (
          <div key={title}>
            <Styled.Count count={index + 1} size="small" />
            <Card
              tabletLayout="left"
              mobileLayout="left"
              title={<Title text={title} variant="text" as="h3" />}
            >
              <Typography variant="bodyTitle" color={theme.colors.gray[600]}>
                {description}
              </Typography>
              {button}
            </Card>
          </div>
        ))}
      </Styled.Steps>
    </Container>
  )
}
export default TemporaryHome
