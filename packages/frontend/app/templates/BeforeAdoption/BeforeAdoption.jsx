import Navigation from "design-system/blocks/navigation"
import Footer from "design-system/blocks/footer"
import SupportBanner from "design-system/blocks/supportBanner"

import CtaBanner from "design-system/patterns/ctaBanner"
import Hero from "design-system/patterns/hero"

import Page from "../Page"

import AdoptionDecision from "./components/AdoptionDecision"

const BeforeAdoption = () => (
  <Page title="Zanim adoptujesz">
    <SupportBanner />

    <Navigation />

    <main>
      <Hero
        heading="Zanim adoptujesz"
        subtitle="Przemyśl swoją decyzję"
        description="Pierwszym i bardzo ważnym krokiem adopcji jest przemyślana decyzja.
        Zapoznaj się z naszym przewodnikiem, który ułatwi ci jej podjęcie."
        backgroundImage="/before-adoption/hero-background.png"
        backgroundMobile="/before-adoption/hero-background-mobile.png"
      />
      <AdoptionDecision />
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

export default BeforeAdoption
