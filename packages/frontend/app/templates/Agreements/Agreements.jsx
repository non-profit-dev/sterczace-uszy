import { useTheme } from "@emotion/react"

import Container from "design-system/components/container/Container"
import Typography from "design-system/components/typography"

import CtaBanner from "design-system/patterns/ctaBanner"
import Hero from "design-system/patterns/hero"

import Navigation from "design-system/blocks/navigation"
import Footer from "design-system/blocks/footer"
import SupportBanner from "design-system/blocks/supportBanner"

import DocumentsList from "./components/DocumentsList"

import * as Styled from "./Agreements.styled"

import Page from "../Page"

const Agreements = () => {
  const theme = useTheme()

  return (
    <Page title="Umowy">
      <SupportBanner />

      <Navigation />

      <main>
        <Hero
          heading="Umowy adopcyjne"
          description="Tutaj znajdziesz umowy adopcyjne i niezbędne informacje, żeby
          dokończyć adopcje wybranego czworonoga."
          asset="/agreements/Hero.png"
          backgroundColor={theme.colors.complementary[100]}
        />

        <Container size="medium">
          <Styled.DocumentContainer>
            <Styled.HeaderContainer>
              <Typography variant="h3" as="h2">
                Niezbędne dokumenty
              </Typography>
              <Typography color={theme.colors.gray[500]} variant="bodyTitle">
                Zostałeś zaakceptowany do adopcji lub wybrany, aby zostać domem
                tymczasowym? Poniższe umowy są dla Ciebie.
              </Typography>
            </Styled.HeaderContainer>

            <DocumentsList />

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
      </main>

      <Footer />
    </Page>
  )
}
export default Agreements
