import { useTheme } from "@emotion/react"

import Container from "design-system/components/container/Container"
import Typography from "design-system/components/typography"

import Banner from "design-system/components/banner"

import CtaBanner from "design-system/patterns/ctaBanner"

import Navigation from "design-system/blocks/navigation"
import Footer from "design-system/blocks/footer"

import Agreement from "frontend/public/documents/Agreement.svg"

import globalData from "shared/data"
import DocumentsTemplate from "./components/DocumentsTemplate"

import * as Styled from "./Agreements.styled"

import Page from "../Page"

const data = [
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
]

const Agreements = () => {
  const theme = useTheme()
  return (
    <Page title="Umowy">
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
              Zostałeś zaakceptowany do adopcji lub wybrany, aby zostać domem
              tymczasowym? Poniższe umowy są dla Ciebie.
            </Typography>
          </Styled.HeaderContainer>

          <DocumentsTemplate data={data} />

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
export default Agreements
