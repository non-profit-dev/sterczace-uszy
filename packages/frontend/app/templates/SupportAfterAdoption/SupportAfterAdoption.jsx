import Banner from "design-system/components/banner"

import Navigation from "design-system/blocks/navigation"
import Footer from "design-system/blocks/footer"

import CtaBanner from "design-system/patterns/ctaBanner"

import Page from "../Page"

import * as Styled from "./SupportAfterAdoption.styled"
import Hero from "./components/Hero"
import PostAdoptionSupport from "./components/PostAdoptionSupport"

const SupportAfterAdoption = () => (
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
      <PostAdoptionSupport />
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

export default SupportAfterAdoption
