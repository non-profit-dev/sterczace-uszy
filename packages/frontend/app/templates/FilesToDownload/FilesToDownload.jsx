import { useTheme } from "@emotion/react"

import Container from "design-system/components/container/Container"
import Typography from "design-system/components/typography"

import Banner from "design-system/components/banner"
import Button from "design-system/components/button"

import CtaBanner from "design-system/patterns/ctaBanner"

import Navigation from "design-system/blocks/navigation"
import Footer from "design-system/blocks/footer"

import AdoptionSurvey from "frontend/public/documents/AdoptionSurvey.svg"
import TempHomeSurvey from "frontend/public/documents/TempHomeSurvey.svg"
import Agreement from "frontend/public/documents/Agreement.svg"

import globalData from "shared/data"
import DocumentsTemplate from "./components/DocumentsTemplate"

import * as Styled from "./FilesToDownload.styled"

import Page from "../Page"

const data = {
  surveys: [
    {
      heading: `Ankieta przedadopcyjna`,
      steps: [
        `pobierz plik`,
        `wypełnij na komputerze lub wydrukuj`,
        `wypełnione dokumenty prześlij na adres ${globalData.contact.mail.text}`,
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
        `wypełnione dokumenty prześlij na adres ${globalData.contact.mail.text}`,
        `poczekaj na odpowiedź od nas`,
      ],
      link: `${globalData.surveys.temporaryHome}`,
      asset: <TempHomeSurvey />,
    },
  ],
  agreements: [
    {
      heading: `Umowa adopcyjna`,
      steps: [
        `przeczytaj umowę`,
        `upewnij się, że wszystko jest dla Ciebie jasne i rozumiesz warunki`,
        `podpisz i przekaż umowę osobiście lub według indywidualnych ustaleń`,
      ],
      link: `${globalData.agreements.adoption}`,
      asset: <Agreement />,
    },
    {
      heading: `Umowa zostania domem tymczasowym`,
      steps: [
        `przeczytaj umowę`,
        `upewnij się, że wszystko jest dla Ciebie jasne i rozumiesz warunki`,
        `podpisz i przekaż umowę osobiście lub według indywidualnych ustaleń`,
      ],
      link: `${globalData.agreements.temporaryHome}`,
      asset: <Agreement />,
    },
  ],
}

const FilesToDownload = () => {
  const theme = useTheme()
  return (
    <Page title="Pliki do pobrania">
      <Styled.Banner>
        <Banner
          heading="Nasi podopieczni czekają na Twoje wsparcie! Chcesz nam pomóc? Zajrzyj"
          button={
            <Button
              text="tutaj"
              href="/wsparcie"
              variant="text"
              size="xsmall"
            />
          }
        />
      </Styled.Banner>

      <Navigation />

      <Container size="medium">
        <Styled.DocumentContainer>
          <Styled.HeaderContainer>
            <Typography variant="h2" as="h1">
              Dokumenty do pobrania
            </Typography>
            <Typography variant="h3" as="h2">
              Ankiety adopcyjne
            </Typography>
            <Typography color={theme.colors.gray[500]} variant="bodyTitle">
              Chcesz zaopiekować się naszym zwierzakiem? Tutaj znajdziesz
              niezbędne dokumenty, abyśmy mogły powierzyć go w Twoje ręce.
            </Typography>
          </Styled.HeaderContainer>

          <DocumentsTemplate data={data.surveys} />

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

          <Styled.HeaderContainer>
            <Typography variant="h3" as="h2">
              Umowy adopcyjne
            </Typography>
            <Typography color={theme.colors.gray[500]} variant="bodyTitle">
              Zostałeś zaakceptowany do adopcji lub wybrany, aby zostać domem
              tymczasowym? Poniższe umowy są dla Ciebie.
            </Typography>
          </Styled.HeaderContainer>

          <DocumentsTemplate data={data.agreements} />

          <Styled.DocumentsInfo>
            <Typography variant="bodyTitle">
              Umowę możesz dostarczyć osobiście odbierając zwierzę.
            </Typography>
            <Typography variant="bodyTitle">
              Jeśli jest to niemożliwe, ustalimy indywidualnie.
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
export default FilesToDownload
