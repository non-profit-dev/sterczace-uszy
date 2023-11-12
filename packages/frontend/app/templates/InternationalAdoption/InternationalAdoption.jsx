import Banner from "design-system/components/banner"

import Navigation from "design-system/blocks/navigation"
import Footer from "design-system/blocks/footer"

import CtaBanner from "design-system/patterns/ctaBanner"
import InternationalAdoptionConditions from "./components/InternationalAdoptionConditions"

import Page from "../Page"

import Hero from "./components/Hero"

const InternationalAdoption = () => (
  <Page title="Adopcja za granicę">
    <Banner>
      Nasi podopieczni czekają na Twoje wsparcie! Chcesz nam pomóc? Zajrzyj{" "}
      <a href="/wplaty">tutaj</a>
    </Banner>

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
