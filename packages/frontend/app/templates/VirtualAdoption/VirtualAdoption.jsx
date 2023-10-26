import Banner from "design-system/components/banner"

import Navigation from "design-system/blocks/navigation"
import Footer from "design-system/blocks/footer"

import CtaBanner from "design-system/patterns/ctaBanner"

import Hero from "./components/Hero"

import Page from "../Page"

import * as Styled from "./VirtualAdoption.styled"

import BasicInfo from "./components/BasicInfo"
import RecurringPayment from "./components/RecurringPayment"
import PaymentConfirmationForm from "./components/PaymentConfirmationForm"
import ChooseYourVirtualPet from "./components/ChooseYourVirtualPet"
import Steps from "./components/Steps"

import { animalsType } from "../../lib/types"

const VirtualAdoption = ({ animals, animalsData }) => (
  <Page title="Adopcja Wirtualna">
    <Styled.Banner>
      <Banner>
        Nasi podopieczni czekają na Twoje wsparcie! Chcesz nam pomóc? Zajrzyj{" "}
        <a href="/wsparcie">tutaj</a>
      </Banner>
    </Styled.Banner>

    <Navigation />

    <main>
      <Hero />
      <BasicInfo />
      <Steps />
      <ChooseYourVirtualPet data={animalsData.items} />
      <RecurringPayment />
      <PaymentConfirmationForm data={animals.items} />
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

VirtualAdoption.propTypes = {
  animals: animalsType.isRequired,
  animalsData: animalsType.isRequired,
}

export default VirtualAdoption
