import { useTheme } from "@emotion/react"
import Button from "design-system/components/button"
import Title from "design-system/components/title"
import Typography from "design-system/components/typography"
import Card from "design-system/patterns/card"

import Page from "../Page"

import * as Styled from "./Adoption.styled"

const Adoption = () => {
  const theme = useTheme()
  return (
    <Page title="Zasady Adopcji">
      <Styled.Main>
        <Styled.Container>
          <Styled.TextContainer>
            <Typography variant="h6" color={theme.colors.primary[500]}>
              ZASADY ADOPCJI
            </Typography>
            <Typography variant="h2" color={theme.colors.grey[700]}>
              Zanim adoptujesz
            </Typography>
            <Typography variant="bodyTitle" color={theme.colors.grey[700]}>
              Zostanie domem adopcyjnym to wielkie wyzwanie. To może być
              początek pięknej przygody, ale musisz wiedzieć jak się do niej
              przygotować.
            </Typography>
          </Styled.TextContainer>
          <Styled.RulesContainer>
            <Card
              illustrationName="RuleFirst"
              title="Zasady Adopcji"
              size="large"
              layout="center"
              title={
                <Title
                  className={null}
                  size="medium"
                  text="Zastanów się"
                  variant="text"
                  textSize="h3"
                  count={1}
                />
              }
            >
              <Typography variant="bodyTitle" color={theme.colors.grey[700]}>
                Pojawienie się nowego członka rodziny to rewolucja. Praca,
                sprawy domowe, hobby - czasami ciężko to pogodzić. Przemyśl
                dobrze czy znajdziesz czas na dodatkowe obowiazki.
              </Typography>
            </Card>
            <Card
              illustrationName="RuleSecond"
              size="large"
              layout="center"
              title={
                <Title
                  className={null}
                  size="medium"
                  text="Przeanalizuj"
                  variant="text"
                  textSize="h3"
                  count={2}
                />
              }
            >
              <Typography variant="bodyTitle" color={theme.colors.grey[700]}>
                Zwierzak to nie tylko ciepłe przutulasy, ale też wizyty u
                weterynarza i opieka. Sprawdz czy Twój budżet na to pozwala i
                czy masz czas, aby zadbać o komfort nowego domownika.
              </Typography>
            </Card>
            <Card
              illustrationName="RuleThird"
              size="large"
              layout="center"
              title={
                <Title
                  className={null}
                  size="medium"
                  text="Porozmawiaj"
                  variant="text"
                  textSize="h3"
                  count={3}
                />
              }
            >
              <Typography variant="bodyTitle" color={theme.colors.grey[700]}>
                To ważna decyzja, więc wyrażenie zgody i zobowiązanie całej
                rodziny ma kluczowe znaczenie. Wszyscy powinni się cieszyć z
                obecności nowego członka Waszej rodziny.
              </Typography>
            </Card>
          </Styled.RulesContainer>
          <Styled.ButtonContainer>
            <Button
              text="Sprawdź warunki adopcji"
              href="/Sprawdz warunki adopcji"
              variant="text"
              iconEnd="arrowRight"
            />
          </Styled.ButtonContainer>
        </Styled.Container>
      </Styled.Main>
    </Page>
  )
}

export default Adoption
