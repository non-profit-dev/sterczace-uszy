import Banner from "design-system/components/banner"

import Navigation from "design-system/blocks/navigation"
import Footer from "design-system/blocks/footer"

import CtaBanner from "design-system/patterns/ctaBanner"

import Page from "../Page"

import * as Styled from "./HomeFound.styled"
import Hero from "./components/Hero"
import HomeFound from "./components/HomeFound"

const HomeFoundPage = () => (
  <Page title="Znalazły dom">
    <Styled.Banner>
      <Banner>
        Nasi podopieczni czekają na Twoje wsparcie! Chcesz nam pomóc? Zajrzyj{" "}
        <a href="/wsparcie">tutaj</a>
      </Banner>
    </Styled.Banner>

    <Navigation />

    <main>
      <Hero />
      <HomeFound />
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

export default HomeFoundPage
