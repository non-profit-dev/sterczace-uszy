import CtaBanner from "design-system/patterns/ctaBanner"
import Navigation from "design-system/blocks/navigation"
import SupportBanner from "design-system/blocks/supportBanner"
import Footer from "design-system/blocks/footer"

import Page from "../Page"

import Hero from "./components/Hero"
import AdoptionRefusal from "./components/AdoptionRefusal"

const AdoptionRefusalPage = () => (
  <Page title="Odmowa adopcji">
    <SupportBanner />

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
