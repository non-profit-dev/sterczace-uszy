import Banner from "design-system/components/banner"
import Button from "design-system/components/button"

import Navigation from "design-system/blocks/navigation"
import Footer from "design-system/blocks/footer"

import Hero from "./components/Hero"
import Content from "./components/Content"

import Page from "../Page"

import * as Styled from "./PrivacyPolicy.styled"

const PrivacyPolicy = () => (
  <Page title="Polityka Prywatności">
    <Styled.Banner>
      <Banner
        heading="Nasi podopieczni czekają na Twoje wsparcie! Chcesz nam pomóc? Zajrzyj"
        button={
          <Button text="tutaj" href="/wsparcie" variant="text" size="xsmall" />
        }
      />
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
