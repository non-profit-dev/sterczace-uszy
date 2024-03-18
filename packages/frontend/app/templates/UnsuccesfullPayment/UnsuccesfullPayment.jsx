import Navigation from "design-system/blocks/navigation"
import Footer from "design-system/blocks/footer"
import SupportBanner from "design-system/blocks/supportBanner"

import CtaBanner from "design-system/patterns/ctaBanner"
import Hero from "./components/Hero"

import Page from "../Page"

const UnsuccesfullPayment = () => (
  <Page title="Nieudana wpłata">
    <SupportBanner />
    <Navigation />
    <main>
      <Hero />
      <CtaBanner
        buttonHref="/kontakt"
        buttonText="Skontaktuj się z nami"
        heading="Masz pytania lub wątpliwości?"
      />
    </main>
    <Footer />
  </Page>
)

export default UnsuccesfullPayment
