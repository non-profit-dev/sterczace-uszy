import Navigation from "design-system/blocks/navigation"
import Footer from "design-system/blocks/footer"

import CtaBanner from "design-system/patterns/ctaBanner"

import Hero from "./components/Hero"
import Subnav from "./components/Subnav"
import Donations from "./components/Donations"
import OneTimeDonation from "./components/OneTimeDonation"
import TemporaryHome from "./components/TemporaryHome"

import Page from "../Page"

import * as Styled from "./Support.styled"

const Support = () => (
  <Page title="Wsparcie">
    <Navigation />

    <Styled.Main>
      <Hero />
      <Subnav />
      <Donations />
      <OneTimeDonation />
      <TemporaryHome />
    </Styled.Main>

    <CtaBanner
      heading="Masz pytania lub wątpliwości?"
      buttonText="Skontaktuj się z nami"
      buttonHref="/kontakt"
    />

    <Footer />
  </Page>
)

Support.propTypes = {}

export default Support
