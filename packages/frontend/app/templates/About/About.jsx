import Container from "design-system/components/container"
import Navigation from "design-system/blocks/navigation"
import Footer from "design-system/blocks/footer"
import SupportBanner from "design-system/blocks/supportBanner"
import Achievements from "./components/Achievements"
import AboutUs from "./components/AboutUs"
import Values from "./components/Values"
import Supporters from "./components/Supporters"
import Page from "../Page"

import {
  supportingType,
  animalsType,
  adoptedAnimalsType,
  financialStatementsType,
} from "../../lib/types"

import Microchips from "./components/Microchips"

import * as Styled from "./About.styled"
import FinancialStatements from "./components/FinancialStatements"

const About = ({
  animals,
  supporting,
  adoptedAnimals,
  financialStatements,
}) => (
  <Page title="O nas">
    <SupportBanner />

    <Navigation />

    <Styled.Main>
      <AboutUs />
      <Values />
      <Container>
        <Achievements
          supportingNumber={supporting.total}
          animalsNumber={animals.total}
          adoptedAnimalsNumber={adoptedAnimals.total}
        />
        <FinancialStatements data={financialStatements.items} />
      </Container>

      <Microchips />

      <Supporters data={supporting.items} />
    </Styled.Main>
    <Footer />
  </Page>
)

About.propTypes = {
  animals: animalsType.isRequired,
  supporting: supportingType.isRequired,
  adoptedAnimals: adoptedAnimalsType.isRequired,
  financialStatements: financialStatementsType.isRequired,
}

export default About
