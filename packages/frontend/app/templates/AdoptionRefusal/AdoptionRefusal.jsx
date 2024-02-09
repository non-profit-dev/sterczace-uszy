import { useTheme } from "@emotion/react"

import CtaBanner from "design-system/patterns/ctaBanner"
import Hero from "design-system/patterns/hero"

import Navigation from "design-system/blocks/navigation"
import SupportBanner from "design-system/blocks/supportBanner"
import Footer from "design-system/blocks/footer"

import Page from "../Page"

import AdoptionRefusal from "./components/AdoptionRefusal"

const AdoptionRefusalPage = () => {
  const theme = useTheme()

  return (
    <Page title="Odmowa adopcji">
      <SupportBanner />

      <Navigation />

      <main>
        <Hero
          heading="Odmowa adopcji"
          subtitle="Przyczyny odmowy"
          description="Negatywna odpowiedz nie oznacza, że nie nadajesz się do adopcji...
        Może wybrałeś pupila, który potrzebuje dużo opieki i troski, a Twój
        plan dnia na to nie pozwala? Sprawdz, co może powodować odmowę."
          asset="/adoption-refusal/hero.png"
          backgroundColor={theme.colors.complementary[100]}
        />
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
}
export default AdoptionRefusalPage
