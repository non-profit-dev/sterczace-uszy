import Navigation from "design-system/blocks/navigation"
import Footer from "design-system/blocks/footer"
import SupportBanner from "design-system/blocks/supportBanner"

import CtaBanner from "design-system/patterns/ctaBanner"
import Hero from "design-system/patterns/hero"

import InternationalAdoptionConditions from "./components/InternationalAdoptionConditions"

import Page from "../Page"

const InternationalAdoption = () => (
  <Page title="Adopcja za granicę">
    <SupportBanner />

    <Navigation />

    <main>
      <Hero
        heading="Adopcja za granicę"
        subtitle="Wyjazd poza Polskę"
        description="Nowy dom to ciepło i miłość właściciela, nie ma znaczenia, czy będzie
        blisko, czy daleko. Możesz zapewnić swojemu pupilowi wymarzony dom,
        gdzie tylko zapragniesz."
        backgroundImage="/international-adoption/hero-background.png"
        backgroundMobile="/international-adoption/hero-background-mobile.png"
        backgroundPosition="top"
      />
      <InternationalAdoptionConditions />
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

export default InternationalAdoption
