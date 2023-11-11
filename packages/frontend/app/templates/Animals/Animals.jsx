import Container from "design-system/components/container"
import Banner from "design-system/components/banner"
import CtaBanner from "design-system/patterns/ctaBanner"
import Navigation from "design-system/blocks/navigation"
import Footer from "design-system/blocks/footer"
import HomeFound from "../HomeFound/components/HomeFound/HomeFound"
import Animals from "./components/Animals"

import Page from "../Page"

import { animalsType } from "../../lib/types"

import * as Styled from "./Animals.styled"

const AnimalsPage = ({ animals }) => (
  <Page title="Nasi podopieczni">
    <Styled.Banner>
      <Banner>
        Nasi podopieczni czekają na Twoje wsparcie! Chcesz nam pomóc? Zajrzyj{" "}
        <a href="/wsparcie">tutaj</a>
      </Banner>
    </Styled.Banner>

    <Navigation />

    <Styled.Main>
      <Container>
        <Animals data={animals.items} />
      </Container>
      <CtaBanner
        buttonHref="/kontakt"
        buttonText="Skontaktuj się z nami"
        heading="Masz pytania lub wątpliwości?"
        mobileLayout="left"
      />
    </Styled.Main>

    <Footer />
  </Page>
)

AnimalsPage.propTypes = {
  animals: animalsType.isRequired,
}

export default AnimalsPage
