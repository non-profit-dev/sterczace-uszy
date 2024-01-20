import Navigation from "design-system/blocks/navigation"
import Footer from "design-system/blocks/footer"

import CtaBanner from "design-system/patterns/ctaBanner"
import Hero from "design-system/patterns/hero"

import TemporaryHomeSection from "./components/temporary-home/TemporaryHome"
import Page from "../Page"

const TemporaryHome = () => (
  <Page title="Dom tymczasowy">
    <Navigation />
    <main>
      <Hero
        heading="Pokaż jak wygląda miłość"
        subtitle="Dom tymczasowy"
        description=" I nawet jeżeli tylko na chwilę, możesz zapewnić dom jakiego
        potrzebuje każdy z naszych podopiecznych. Sprawdź co możesz zrobić."
        backgroundImage="/temporary-home/hero-background.png"
        backgroundMobile="/temporary-home/hero-background-tablet.png"
      />
      <TemporaryHomeSection />
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
export default TemporaryHome
