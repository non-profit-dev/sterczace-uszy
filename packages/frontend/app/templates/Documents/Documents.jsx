import { useTheme } from "@emotion/react"

import Container from "design-system/components/container/Container"
import Typography from "design-system/components/typography"

import CtaBanner from "design-system/patterns/ctaBanner"
import Hero from "design-system/patterns/hero"

import Navigation from "design-system/blocks/navigation"
import Footer from "design-system/blocks/footer"
import SupportBanner from "design-system/blocks/supportBanner"

import globalData from "shared/data"

import DocumentsList from "./components/DocumentsList"

import * as Styled from "./Documents.styled"

import Page from "../Page"

const Documents = () => {
  const theme = useTheme()
  return (
    <Page title="Ankiety">
      <SupportBanner />

      <Navigation />

      <main>
        <Hero
          heading="Ankiety adopcyjne"
          description="Tutaj znajdziesz ankiety adopcyjne i niezbędne informacje, aby je
          wysłać do fundacji."
          asset="/documents/Hero.png"
          backgroundColor={theme.colors.complementary[100]}
        />

        <Container size="medium">
          <Styled.DocumentContainer>
            <Styled.HeaderContainer>
              <Typography variant="h2" as="h2">
                Niezbędne dokumenty
              </Typography>
              <Typography color={theme.colors.gray[500]} variant="bodyTitle">
                Chcesz zaopiekować się naszym zwierzakiem? Tutaj znajdziesz
                niezbędne dokumenty, abyśmy mogły powierzyć go w Twoje ręce.
              </Typography>
            </Styled.HeaderContainer>

            <DocumentsList />

            <Styled.DocumentsInfo>
              <Typography variant="bodyTitle">
                Odpowiedź otrzymasz telefonicznie lub z{" "}
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
      </main>

      <Footer />
    </Page>
  )
}
export default Documents
