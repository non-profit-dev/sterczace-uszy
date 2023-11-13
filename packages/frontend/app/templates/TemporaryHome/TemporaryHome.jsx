import Navigation from "design-system/blocks/navigation"
import Footer from "design-system/blocks/footer"
import CtaBanner from "design-system/patterns/ctaBanner"
import TemporaryHomeSection from "./components/temporary-home/TemporaryHome"
import Page from "../Page"
import Hero from "./components/hero/Hero"

const TemporaryHome = () => (
  <Page title="Pomagaj za darmo">
    <Navigation />
    <Hero />
    <TemporaryHomeSection />
    <CtaBanner
      heading="Masz pytania lub wątpliwości?"
      buttonText="Skontaktuj się z nami"
      buttonHref="/kontakt"
      mobileLayout="left"
    />
    <Footer />
  </Page>
)
export default TemporaryHome
