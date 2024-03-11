import Container from "design-system/components/container"

import Navigation from "design-system/blocks/navigation"
import Footer from "design-system/blocks/footer"
import Page from "../Page"
import CtaBanner from "design-system/patterns/ctaBanner"

import * as Styled from "./FoundationBackstage.styled"

const FoundationBackstage = () => (
  <Page title="Fundacja za kulisami">
    <Navigation />
    <Container>
      <Styled.Banner heading="Pupilary" subtitle="Fundacja za kulisami">
        Pierwotna strona internetowa fundacji wymagała odświeżenia i
        dostosowania jej wyświetlania na różnych urządzeniach. Przedstawiamy
        Pupilary - zespół wolontariuszek online, które pracują nad rozwojem i
        utrzymaniem tej strony.
        <br /> Zapraszamy do kontaktu!
      </Styled.Banner>
    </Container>
    <CtaBanner
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
