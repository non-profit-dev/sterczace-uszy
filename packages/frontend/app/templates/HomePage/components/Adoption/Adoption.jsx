import { useTheme } from "@emotion/react"
import Button from "design-system/components/button"
import Title from "design-system/components/title"
import TextBanner from "design-system/patterns/textBanner"
import Typography from "design-system/components/typography"
import Card from "design-system/patterns/card"

import * as Styled from "./Adoption.styled"

const Adoption = () => {
  const theme = useTheme()
  return (
    <Styled.Main>
      <Styled.Container>
        <Styled.TextContainer>
          <TextBanner
            layout="center"
            heading="Zanim adoptujesz"
            subtitle="zasady adopcji"
          >
            Nasi podopieczni czekają na Twoją pomoc. Nowy dom, wsparcie
            finansowe, spacery, pełna miska, opieka lekarza to tylko niektóre
            formy wsparcia. Jeżeli chcesz czynić dobro sprawdź, co możesz
            zrobić.
          </TextBanner>
        </Styled.TextContainer>
        <Styled.RulesContainer>
          <Card illustrationName="RuleFirst" size="large" layout="center">
            <Title
              size="medium"
              text="Zastanów się"
              variant="text"
              textSize="h3"
              count={1}
            />
            <Typography variant="bodyTitle" color={theme.colors.grey[700]}>
              Pojawienie się nowego członka rodziny to rewolucja. Praca, sprawy
              domowe, hobby - czasami ciężko to pogodzić. Przemyśl dobrze czy
              znajdziesz czas na dodatkowe obowiązki.
            </Typography>
          </Card>
          <Card illustrationName="RuleSecond" size="large" layout="center">
            <Title
              size="medium"
              text="Przeanalizuj"
              variant="text"
              textSize="h3"
              count={2}
            />
            <Typography variant="bodyTitle" color={theme.colors.grey[700]}>
              Zwierzak to nie tylko ciepłe przutulasy, ale też wizyty u
              weterynarza i opieka. Sprawdź czy Twój budżet na to pozwala i czy
              masz czas, aby zadbać o komfort nowego domownika.
            </Typography>
          </Card>
          <Card illustrationName="RuleThird" size="large" layout="center">
            <Title
              size="medium"
              text="Porozmawiaj"
              variant="text"
              textSize="h3"
              count={3}
            />
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
            href="/adopcja"
            variant="text"
            iconEnd="arrowRight"
          />
        </Styled.ButtonContainer>
      </Styled.Container>
    </Styled.Main>
  )
}

export default Adoption
