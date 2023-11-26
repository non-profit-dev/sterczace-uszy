import Navigation from "design-system/blocks/navigation"
import Footer from "design-system/blocks/footer"
import SupportBanner from "design-system/blocks/supportBanner"

import CtaBanner from "design-system/patterns/ctaBanner"

import Page from "../Page"

import Hero from "./components/Hero"
import AdoptionDecision from "./components/AdoptionDecision"

const BeforeAdoption = () => (
  <Page title="Zanim adoptujesz">
    <SupportBanner />

    <Navigation />

    <main>
      <Hero />
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
