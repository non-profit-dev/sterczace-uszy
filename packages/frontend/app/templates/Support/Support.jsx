import Navigation from "design-system/blocks/navigation"
import Footer from "design-system/blocks/footer"

import CtaBanner from "design-system/patterns/ctaBanner"
import Volunteering from "./components/Volunteering"
import Hero from "./components/Hero"
import Subnav from "./components/Subnav"
import Tax from "./components/Tax"
import Donations from "./components/Donations"
import OneTimeDonation from "./components/OneTimeDonation"
import TemporaryHome from "./components/TemporaryHome"
import Fanimani from "./components/Fanimani"

import Page from "../Page"

import * as Styled from "./Support.styled"

const Support = () => (
  <Page title="Wsparcie">
    <Navigation />

    <Styled.Main>
      <Hero />
      <Subnav />
      <Tax />
      <Donations />
      <OneTimeDonation />
      <Fanimani />
      <TemporaryHome />
      <Volunteering />
      <CtaBanner
        heading="Masz pytania lub wątpliwości?"
        buttonText="Skontaktuj się z nami"
        buttonHref="/kontakt"
      />
    </Styled.Main>

    <Footer />
  </Page>
)

Support.propTypes = {}

export default Support
