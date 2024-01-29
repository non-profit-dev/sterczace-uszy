import Navigation from "design-system/blocks/navigation"
import Footer from "design-system/blocks/footer"

import CtaBanner from "design-system/patterns/ctaBanner"
import Hero from "design-system/patterns/hero"

import Fanimani from "./components/Fanimani"
import Page from "../Page"

import * as Styled from "./FreeSupport.styled"

const FreeSupport = () => (
  <Page title="Pomagaj za darmo">
    <Navigation />
    <Styled.Main>
      <Hero
        heading="Nie potrzeba wiele by pomóc"
        subtitle="Pomagaj za darmo"
        description="Wpłaty finansowe to nie jedyny sposób by nam pomóc. I choć wiemy, że
        w życiu bywa różnie, jedno zawsze pozostaje niezmienne - miłość do
        zwierząt. Sprawdź co możesz zrobić, aby wspierać naszych
        podopiecznych w każdej sytuacji."
        backgroundImage="/free-support/hero.png"
        backgroundMobile="/free-support/hero-tablet.png"
        backgroundPosition="bottom"
      />
      <Fanimani />
      <CtaBanner
        heading="Masz pytania lub wątpliwości?"
        buttonText="Skontaktuj się z nami"
        buttonHref="/kontakt"
        mobileLayout="left"
      />
    </Styled.Main>
    <Footer />
  </Page>
)

FreeSupport.propTypes = {}

export default FreeSupport
