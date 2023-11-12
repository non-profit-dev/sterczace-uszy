import { useTheme } from "@emotion/react"

import Container from "design-system/components/container"
import Typography from "design-system/components/typography"

import Navigation from "design-system/blocks/navigation"
import Footer from "design-system/blocks/footer"
import SupportBanner from "design-system/blocks/supportBanner"

import globalData from "shared/data"

import * as Styled from "./Document.styled"
import DocumentsTemplate from "./components/DocumentsTemplate"

import Page from "../Page"

const Documents = () => {
  const theme = useTheme()
  return (
    <Page title="Dokumenty do pobrania">
      <SupportBanner />

      <Navigation />

      <Container size="medium">
        <Styled.DocumentContainer>
          <Styled.HeaderContainer>
            <Typography variant="h2">Dokumenty do pobrania</Typography>
            <Typography color={theme.colors.gray[500]} variant="bodyTitle">
              Chcesz zaopiekować się naszym zwierzakiem? Tutaj znajdziesz
              niezbędne dokumenty, abyśmy mogły powierzyć go w Twoje ręce.
            </Typography>
          </Styled.HeaderContainer>
          <DocumentsTemplate />
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

      <Footer />
    </Page>
  )
}
export default Documents
