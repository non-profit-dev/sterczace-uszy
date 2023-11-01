import Banner from "design-system/components/banner"
import CtaBanner from "design-system/patterns/ctaBanner"
import Navigation from "design-system/blocks/navigation"
import Footer from "design-system/blocks/footer"

import Page from "../Page"

import Hero from "./components/Hero"
import AdoptionRefusal from "./components/AdoptionRefusal"

const AdoptionRefusalPage = () => (
  <Page title="Adopcja">
    <Banner>
      Nasi podopieczni czekają na Twoje wsparcie! Chcesz nam pomóc? Zajrzyj{" "}
      <a href="/wsparcie">tutaj</a>
    </Banner>

    <Navigation />

    <main>
      <Hero />
      <AdoptionRefusal />
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

export default AdoptionRefusalPage
