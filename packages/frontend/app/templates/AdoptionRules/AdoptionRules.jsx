import Navigation from "design-system/blocks/navigation"
import Footer from "design-system/blocks/footer"
import SupportBanner from "design-system/blocks/supportBanner"

import CtaBanner from "design-system/patterns/ctaBanner"
import Hero from "design-system/patterns/hero"

import Page from "../Page"

import AdoptionProcess from "./components/AdoptionProcess"
import AdoptionSteps from "./components/AdoptionSteps"

const AdoptionRules = () => (
  <Page title="Zasady adopcji">
    <SupportBanner />

    <Navigation />

    <main>
      <Hero
        heading="Zasady adopcji"
        subtitle="Prosta instrukcja"
        description=" Poniżej znajdziesz instrukcje i niezbędne dokumenty, abyśmy mogły
        powierzyć w Twoje ręce wybrane zwierzę."
        backgroundImage="/adoption-rules/adoption-background.png"
        backgroundMobile="/adoption-rules/adoption-background-mobile.png"
      />
      <AdoptionProcess />
      <AdoptionSteps />
      <CtaBanner
        heading="Masz pytania lub wątpliwości?"
        buttonText="Skontaktuj się z nami"
        buttonHref="/kontakt"
        mobileLayout="left"
      />
    </main>

    <Footer />
  </Page>
)

export default AdoptionRules
