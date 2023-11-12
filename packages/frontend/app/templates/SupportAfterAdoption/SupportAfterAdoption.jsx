import Navigation from "design-system/blocks/navigation"
import Footer from "design-system/blocks/footer"
import SupportBanner from "design-system/blocks/supportBanner"

import CtaBanner from "design-system/patterns/ctaBanner"

import Page from "../Page"

import Hero from "./components/Hero"
import PostAdoptionSupport from "./components/PostAdoptionSupport"

const SupportAfterAdoption = () => (
  <Page title="Wsparcie po adopcji">
    <SupportBanner />

    <Navigation />

    <main>
      <Hero />
      <PostAdoptionSupport />
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

export default SupportAfterAdoption
