import Navigation from "design-system/blocks/navigation"
import Footer from "design-system/blocks/footer"
import SupportBanner from "design-system/blocks/supportBanner"

import CtaBanner from "design-system/patterns/ctaBanner"
import Hero from "design-system/patterns/hero"

import Page from "../Page"

import BasicInfo from "./components/BasicInfo"
import ActionDuringVisit from "./components/ActionDuringVisit"
import SpecialSituations from "./components/SpecialSituations"

const PreAdoptionVisit = () => (
  <Page title="Wizyta przedadopcyjna">
    <SupportBanner />
    <Navigation />

    <main>
      <Hero
        heading="Wizyta przedadopcyjna"
        subtitle="rozmowa w twoim domu"
        description="Wizyta pomaga nam poznać sie lepiej i pomóc Tobie rozwiać wszelkie
        wątpliwości zanim zwierzę trafi do nowego domu."
        asset="/pre-adoption-visit/hero.png"
      />
      <BasicInfo />
      <ActionDuringVisit />
      <SpecialSituations />
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

export default PreAdoptionVisit
