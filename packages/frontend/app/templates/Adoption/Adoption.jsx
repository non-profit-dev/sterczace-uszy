import Banner from "design-system/components/banner"

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
import RecurringPayment from "./components/RecurringPayment"
import PaymentConfirmationForm from "./components/PaymentConfirmationForm"

import { animalsType } from "../../lib/types"

const Adoption = ({ animals }) => (
  <Page title="Adopcja">
    <Styled.Banner>
      <Banner>
        Nasi podopieczni czekają na Twoje wsparcie! Chcesz nam pomóc? Zajrzyj{" "}
        <a href="/wsparcie">tutaj</a>
      </Banner>
    </Styled.Banner>

    <Navigation />

    <main>
      <Hero />
      <AdoptionDecision />
      <TemporaryHome />
      <PreAdoptionVisit />
      <ActionDuringVisit />
      <SpecialSituations />
      <RecurringPayment />
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
