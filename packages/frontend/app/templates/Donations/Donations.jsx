import Navigation from "design-system/blocks/navigation"
import Footer from "design-system/blocks/footer"

import CtaBanner from "design-system/patterns/ctaBanner"
import Hero from "design-system/patterns/hero"

import Tax from "./components/Tax"
import Info from "./components/Info"
import OneTimeDonation from "./components/OneTimeDonation"

import Page from "../Page"

import * as Styled from "./Donations.styled"

const Donations = () => (
  <Page title="Wpłaty">
    <Navigation />

    <Styled.Main>
      <Hero
        heading="Twoja pomoc ma moc!"
        subtitle="Wsparcie finansowe"
        description="Już teraz możesz zostać naszym superbohaterem! Wybierz dostępną
          dla Ciebie formę wsparcia finansowego i zmieniaj z nami życie
          potrzebujących zwierząt."
        asset="/donations/hero.svg"
      />
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
