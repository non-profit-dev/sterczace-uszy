import Navigation from "design-system/blocks/navigation"
import Footer from "design-system/blocks/footer"
import SupportBanner from "design-system/blocks/supportBanner"

import Hero from "./components/Hero"
import Content from "./components/Content"

import Page from "../Page"

const PrivacyPolicy = () => (
  <Page title="Polityka Prywatności">
    <SupportBanner />

    <Navigation />

    <main>
      <Hero />
      <Content />
    </main>

    <Footer />
  </Page>
)

export default PrivacyPolicy
