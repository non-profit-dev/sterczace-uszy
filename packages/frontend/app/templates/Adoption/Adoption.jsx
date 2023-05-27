import Banner from "design-system/components/banner"
import Button from "design-system/components/button"

import Navigation from "design-system/blocks/navigation"
import Footer from "design-system/blocks/footer"

import CtaBanner from "design-system/patterns/ctaBanner"

import Hero from "./components/Hero"
import TemporaryHome from "./components/AdoptionRules"

import Page from "../Page"

import * as Styled from "./Adoption.styled"

import AdoptionDecision from "./components/AdoptionDecision"
import PreAdoptionVisit from "./PreAdoptionVisit"
import ActionDuringVisit from "./components/ActionDuringVisit"
import SpecialSituations from "./components/SpecialSituations"
import PaymentConfirmationForm from "./components/PaymentConfirmationForm"
import { animalsType } from "../../lib/types"

const Adoption = ({ animals }) => (
  <Page title="Adopcja">
    <Styled.Banner>
      <Banner
        heading="Nasi podopieczni czekają na Twoje wsparcie! Chcesz nam pomóc? Zajrzyj"
        button={
          <Button
            text="tutaj"
            href="/wsparcie"
            variant="textLine"
            size="small"
          />
        }
      />
    </Styled.Banner>

    <Navigation />

    <main>
      <Hero />
      <AdoptionDecision />
      <TemporaryHome />
      <PreAdoptionVisit />
      <ActionDuringVisit />
      <SpecialSituations />
      {/* virtual adoption */}
      <PaymentConfirmationForm data={animals.items} />
      <CtaBanner
        heading="Masz pytania lub wątpliwości?"
        buttonText="Skontaktuj się z nami"
        buttonHref="/kontakt"
      />
    </main>

    <Footer />
  </Page>
)

Adoption.propTypes = {
  animals: animalsType.isRequired,
}

export default Adoption
