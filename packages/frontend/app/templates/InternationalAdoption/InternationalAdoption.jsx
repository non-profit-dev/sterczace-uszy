import Navigation from "design-system/blocks/navigation"
import Footer from "design-system/blocks/footer"
import SupportBanner from "design-system/blocks/supportBanner"

import CtaBanner from "design-system/patterns/ctaBanner"
import InternationalAdoptionConditions from "./components/InternationalAdoptionConditions"

import Page from "../Page"

import Hero from "./components/Hero"

const InternationalAdoption = () => (
  <Page title="Adopcja za granicę">
    <SupportBanner />

    <Navigation />

    <main>
      <Hero />
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
