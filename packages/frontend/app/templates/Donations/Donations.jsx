import Navigation from "design-system/blocks/navigation"
import Footer from "design-system/blocks/footer"

import CtaBanner from "design-system/patterns/ctaBanner"
import Hero from "./components/Hero"
import Tax from "./components/Tax"
import Info from "./components/Info"
import OneTimeDonation from "./components/OneTimeDonation"

import Page from "../Page"

import * as Styled from "./Donations.styled"

const Donations = () => (
  <Page title="Wpłaty">
    <Navigation />

    <Styled.Main>
      <Hero />
      <Tax />
      <Info />
      <OneTimeDonation />
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

Donations.propTypes = {}

export default Donations
