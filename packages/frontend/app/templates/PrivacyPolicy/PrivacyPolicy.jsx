import Banner from "design-system/components/banner"

import Navigation from "design-system/blocks/navigation"
import Footer from "design-system/blocks/footer"

import Hero from "./components/Hero"
import Content from "./components/Content"

import Page from "../Page"

import * as Styled from "./PrivacyPolicy.styled"

const PrivacyPolicy = () => (
  <Page title="Polityka Prywatności">
    <Styled.Banner>
      <Banner>
        Nasi podopieczni czekają na Twoje wsparcie! Chcesz nam pomóc? Zajrzyj{" "}
        <a href="/wplaty">tutaj</a>
      </Banner>
    </Styled.Banner>

    <Navigation />

    <main>
      <Hero />
      <Content />
    </main>

    <Footer />
  </Page>
)

export default PrivacyPolicy
