import { useTheme } from "@emotion/react"

import Container from "design-system/components/container/Container"
import Typography from "design-system/components/typography"

import Banner from "design-system/components/banner"

import CtaBanner from "design-system/patterns/ctaBanner"

import Navigation from "design-system/blocks/navigation"
import Footer from "design-system/blocks/footer"

import AdoptionSurvey from "frontend/public/documents/AdoptionSurvey.svg"
import TempHomeSurvey from "frontend/public/documents/TempHomeSurvey.svg"

import globalData from "shared/data"
import DocumentsTemplate from "./components/DocumentsTemplate"

import * as Styled from "./Documents.styled"

import Page from "../Page"

const data = [
  {
    heading: `Ankieta przedadopcyjna`,
    steps: [
      `pobierz plik`,
      `wypełnij na komputerze lub wydrukuj`,
      `wypełnione dokumenty prześlij na adres: <a href="mailto:${globalData.contact.mail.text}">
        ${globalData.contact.mail.text}
      </a>`,
      `poczekaj na odpowiedź od nas`,
    ],
    link: `${globalData.surveys.preAdoption}`,
    asset: <AdoptionSurvey />,
  },
  {
    heading: `Ankieta dla domu tymczasowego`,
    steps: [
      `pobierz plik`,
      `wypełnij na komputerze lub wydrukuj`,
      `wypełnione dokumenty prześlij na adres: <a href="mailto:${globalData.contact.mail.text}">
        ${globalData.contact.mail.text}
      </a>`,
      `poczekaj na odpowiedź od nas`,
    ],
    link: `${globalData.surveys.temporaryHome}`,
    asset: <TempHomeSurvey />,
  },
]

const Documents = () => {
  const theme = useTheme()
  return (
    <Page title="Ankiety">
      <Styled.Banner>
        <Banner>
          Nasi podopieczni czekają na Twoje wsparcie! Chcesz nam pomóc? Zajrzyj{" "}
          <a href="/wsparcie">tutaj</a>
        </Banner>
      </Styled.Banner>

      <Navigation />

      <Container size="medium">
        <Styled.DocumentContainer>
          <Styled.HeaderContainer>
            <Typography variant="h3" as="h2">
              Niezbędne dokumenty
            </Typography>
            <Typography color={theme.colors.gray[500]} variant="bodyTitle">
              Chcesz zaopiekować się naszym zwierzakiem? Tutaj znajdziesz
              niezbędne dokumenty, abyśmy mogły powierzyć go w Twoje ręce.
            </Typography>
          </Styled.HeaderContainer>

          <DocumentsTemplate data={data} />

          <Styled.DocumentsInfo>
            <Typography variant="bodyTitle">
              Ankietę wyślij na adres{" "}
              <a href={globalData.contact.mail.link}>
                {globalData.contact.mail.text}
              </a>
              <br />
              Jak tylko ją przeanalizujemy skontaktujemy się z Tobą.
            </Typography>
          </Styled.DocumentsInfo>
        </Styled.DocumentContainer>
      </Container>

      <CtaBanner
        buttonHref="/kontakt"
        buttonText="Skontaktuj się z nami"
        heading="Masz pytania lub wątpliwości?"
      />

      <Footer />
    </Page>
  )
}
export default Documents
