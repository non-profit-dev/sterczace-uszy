import Navigation from "design-system/blocks/navigation"
import Footer from "design-system/blocks/footer"
import SupportBanner from "design-system/blocks/supportBanner"
import Hero from "design-system/patterns/hero"
import CtaBanner from "design-system/patterns/ctaBanner"

import Page from "../Page"

import GeneralPartnerships from "./components/GeneralPartnerships"
import AdoptionFamilyPartnerships from "./components/AdoptionFamilyPartnerships"

import * as Styled from "./PartnersAndDiscounts.styled"

import { partnershipsType } from "../../lib/types"

const PartnersAndDiscounts = ({ partnerships }) => (
  <Page title="Partnerzy i zniżki">
    <SupportBanner />

    <Navigation />

    <Styled.Main>
      <Hero
        heading="Sieć wspólnych korzyści"
        subtitle="Partnerzy i zniżki"
        description="Na tej stronie poznasz naszych partnerów, z którymi regularnie współpracujemy oraz znajdziesz zniżki na praktyczne usługi, które świadczą."
        backgroundImage="/partners-and-discounts/hero.png"
        backgroundMobile="/partners-and-discounts/hero.png"
      />

      <GeneralPartnerships partnerships={partnerships} />

      <AdoptionFamilyPartnerships partnerships={partnerships} />

      <CtaBanner
        buttonHref="/kontakt"
        buttonText="Skontaktuj się z nami"
        heading="Masz pytania lub wątpliwości?"
        mobileLayout="left"
      />
    </Styled.Main>

    <Footer />
  </Page>
)

PartnersAndDiscounts.propTypes = {
  partnerships: partnershipsType.isRequired,
}

export default PartnersAndDiscounts
