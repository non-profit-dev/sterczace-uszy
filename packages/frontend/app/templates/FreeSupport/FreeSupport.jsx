import Navigation from "design-system/blocks/navigation"
import Footer from "design-system/blocks/footer"
import CtaBanner from "design-system/patterns/ctaBanner"
import Hero from "./components/Hero"
import Fanimani from "./components/Fanimani"
import Page from "../Page"
import * as Styled from "./FreeSupport.styled"

const FreeSupport = () => (
  <Page title="Wsparcie">
    <Navigation />
    <Styled.Main>
      <Hero />
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
