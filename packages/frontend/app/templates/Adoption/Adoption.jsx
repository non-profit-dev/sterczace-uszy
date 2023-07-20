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
import VirtualAdoption from "./components/VirtualAdoption"
import ChooseYourVirtualPet from "./components/ChooseYourVirtualPet"
import AdoptionRefusal from "./components/AdoptionRefusal"
import InternationalAdoption from "./components/InternationalAdoption"
import VirtualAdoptionSteps from "./components/VirtualAdoptionSteps"

import { animalsType } from "../../lib/types"
import PostAdoptionSupport from "./components/PostAdoptionSupport/PostAdoptionSupport"

const Adoption = ({ animals, animalsData }) => (
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
      <InternationalAdoption />
      <PostAdoptionSupport />
      <AdoptionRefusal />
      <VirtualAdoption />
      <VirtualAdoptionSteps />
      <ChooseYourVirtualPet data={animalsData.items} />
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
  animalsData: animalsType.isRequired,
}

export default Adoption
