import Navigation from "design-system/blocks/navigation"
import Footer from "design-system/blocks/footer"

import Container from "design-system/components/container"
import Typography from "design-system/components/typography"
import Page from "../Page"
import * as Styled from "./FoundationBackstage.styled"
import CardList from "./components/TeamCardList/TeamCardList"

const FoundationBackstage = () => (
  <Page title="Fundacja za kulisami">
    <Navigation />
    <Container>
      <Styled.ContentContainer>
        <Styled.Banner
          heading="Pupilary"
          subtitle="Fundacja za kulisami"
          mobileLayout="left"
          tabletLayout="left"
        >
          <Styled.TeamDescription>
            <Typography varaint="bodyTitle">
              Pierwotna strona internetowa fundacji wymagała odświeżenia i
              dostosowania jej wyświetlania na różnych urządzeniach.
              Przedstawiamy Pupilary - zespół wolontariuszek online, które
              pracują nad rozwojem i utrzymaniem tej strony.
            </Typography>
            <Typography varaint="bodyTitle">Zapraszamy do kontaktu!</Typography>
          </Styled.TeamDescription>
        </Styled.Banner>
        <CardList />
      </Styled.ContentContainer>
    </Container>
    <Styled.CtaBannerComponent
      heading="Napisz do naszego zespołu"
      buttonText="uxfundacja@gmail.com"
      buttonHref="mailto:uxfundacja@gmail.com"
      mobileLayout="left"
      buttonVariant="text"
    />
    <Footer />
  </Page>
)

FoundationBackstage.propTypes = {}

export default FoundationBackstage
