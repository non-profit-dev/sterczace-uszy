import Banner from "design-system/components/banner"

import Navigation from "design-system/blocks/navigation"
import Footer from "design-system/blocks/footer"

import Hero from "design-system/patterns/hero"
import CtaBanner from "design-system/patterns/ctaBanner"

import Page from "../Page"

import * as Styled from "./HomeFound.styled"
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
      <Hero
        heading="Znalazły dom"
        subtitle="Zaopiekowani wybrańcy"
        description="Pozostajemy w stałym kontakcie z rodzinami, które zdecydowały się na
        adopcję. Pomagamy, doradzamy i z radością słuchamy szczęśliwych
        opowieści."
        backgroundImage="/home-found/home-found-hero.png"
        backgroundMobile="/home-found/home-found-hero-mobile.png"
      />
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
