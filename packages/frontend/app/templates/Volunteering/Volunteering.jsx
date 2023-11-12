import Navigation from "design-system/blocks/navigation"
import Footer from "design-system/blocks/footer"

import CtaBanner from "design-system/patterns/ctaBanner"

import Info from "./components/Info"
import Hero from "./components/Hero"

import Page from "../Page"

import * as Styled from "./Volunteering.styled"

const Volunteering = () => (
  <Page title="Wolontariat">
    <Navigation />

    <Styled.Main>
      <Hero />
      <Info />
      <CtaBanner
        heading="Masz pytania lub wątpliwości?"
        buttonText="Skontaktuj się z nami"
        buttonHref="/kontakt"
        mobileLayout="left"
      />
    </Styled.Main>

    <Footer />
  </Page>
)

Volunteering.propTypes = {}

export default Volunteering
