import Navigation from "design-system/blocks/navigation"
import Footer from "design-system/blocks/footer"

import CtaBanner from "design-system/patterns/ctaBanner"
import Hero from "design-system/patterns/hero"

import Info from "./components/Info"

import Page from "../Page"

import * as Styled from "./Volunteering.styled"

const Volunteering = () => (
  <Page title="Wolontariat">
    <Navigation />

    <Styled.Main>
      <Hero
        heading="Zostań częścią społeczności"
        subtitle="Wolontariat"
        description="Pomoc zwierzętom to ciągłe wyzwania. Każdego dnia mierzymy się z
        nowymi problemami, ale wierzymy, że dzięki wsparciu innych osób
        możemy realizować naszą misję. Sprawdź jak możesz się zaangażować."
        asset="/volunteering/hero.svg"
      />
      <Info />
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

Volunteering.propTypes = {}

export default Volunteering
