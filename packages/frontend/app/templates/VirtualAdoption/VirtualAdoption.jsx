import { useTheme } from "@emotion/react"

import Navigation from "design-system/blocks/navigation"
import Footer from "design-system/blocks/footer"
import SupportBanner from "design-system/blocks/supportBanner"

import CtaBanner from "design-system/patterns/ctaBanner"
import Hero from "design-system/patterns/hero"

import Page from "../Page"

import BasicInfo from "./components/BasicInfo"
import RecurringPayment from "./components/RecurringPayment"
import PaymentConfirmationForm from "./components/PaymentConfirmationForm"
import ChooseYourVirtualPet from "./components/ChooseYourVirtualPet"
import VirtualCertificate from "./components/VirtualCertificate"
import Steps from "./components/Steps"

import { animalsType } from "../../lib/types"

const VirtualAdoption = ({ animals, animalsData }) => {
  const theme = useTheme()

  return (
    <Page title="Adopcja wirtualna">
      <SupportBanner />

      <Navigation />

      <main>
        <Hero
          heading="Adoptuj wirtualnie!"
          subtitle="Adopcja wirtualna"
          description="Nie możesz adoptować? I tak możesz pomóc! Sprawdź, co możesz zrobić,
  aby pomagać naszym podopiecznym. Wybierz swojego pupila i adoptuj go
  wirtualnie."
          asset="/virtual-adoption/hero.png"
          backgroundColor={theme.colors.complementary[100]}
        />
        <BasicInfo />
        <Steps />
        <ChooseYourVirtualPet data={animalsData.items} />
        <RecurringPayment />
        <PaymentConfirmationForm data={animals.items} />
        <VirtualCertificate />
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

VirtualAdoption.propTypes = {
  animals: animalsType.isRequired,
  animalsData: animalsType.isRequired,
}

export default VirtualAdoption
