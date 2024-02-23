import Navigation from "design-system/blocks/navigation"
import Footer from "design-system/blocks/footer"
import SupportBanner from "design-system/blocks/supportBanner"

import CtaBanner from "design-system/patterns/ctaBanner"
import Hero from "./components/Hero"
import Content from "./components/Content"

import Page from "../Page"

const TermsOfPayment = () => (
  <Page title="Regulamin płatności">
    <SupportBanner />
    <Navigation />
    <main>
      <Hero />
      <Content />
      <CtaBanner
        buttonHref="/kontakt"
        buttonText="Skontaktuj się z nami"
        heading="Masz pytania lub wątpliwości?"
      />
    </main>
    <Footer />
  </Page>
)

export default TermsOfPayment
