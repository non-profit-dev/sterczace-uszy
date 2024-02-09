import Navigation from "design-system/blocks/navigation"
import Footer from "design-system/blocks/footer"
import SupportBanner from "design-system/blocks/supportBanner"

import CtaBanner from "design-system/patterns/ctaBanner"
import Hero from "design-system/patterns/hero"

import Page from "../Page"

import PostAdoptionSupport from "./components/PostAdoptionSupport"

const SupportAfterAdoption = () => (
  <Page title="Wsparcie po adopcji">
    <SupportBanner />

    <Navigation />

    <main>
      <Hero
        heading="Wsparcie rodzin adopcyjnych"
        subtitle="Po adopcji"
        description="Kiedy dajecie dom zwierzakowi z naszej fundacji i otaczacie go
        miłością, nie zostajecie sami. Oferujemy wsparcie po adopcji w różnych
        formach, abyście czuli się pewnie i komfortowo w nowej roli opiekunów."
        backgroundImage="/support-after-adoption/hero-background.png"
        backgroundMobile="/support-after-adoption/hero-background-mobile.png"
      />
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
