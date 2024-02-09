import Container from "design-system/components/container"

import Hero from "design-system/patterns/hero"

import Navigation from "design-system/blocks/navigation"
import Footer from "design-system/blocks/footer"
import SupportBanner from "design-system/blocks/supportBanner"

import Achievements from "./components/Achievements"
import AboutUs from "./components/AboutUs"
import Values from "./components/Values"
import Page from "../Page"

import {
  supportingType,
  animalsType,
  adoptedAnimalsType,
} from "../../lib/types"

import * as Styled from "./About.styled"

const About = ({ animals, supporting, adoptedAnimals }) => (
  <Page title="O nas">
    <SupportBanner />
    <Navigation />
    <Styled.Main>
      <Hero
        heading="Poznaj nas lepiej"
        subtitle="Nasza Fundacja"
        description="Nasza fundacja ma pewną historię, która ukształtowała nasze wartości.
  Mamy na koncie wiele sukcesów, którymi się chętnie dzielimy."
        backgroundImage="/about/about-background.png"
        backgroundMobile="/about/about-background-mobile.png"
      />
      <AboutUs />
      <Values />
      <Container>
        <Achievements
          supportingNumber={supporting.total}
          animalsNumber={animals.total}
          adoptedAnimalsNumber={adoptedAnimals.total}
        />
      </Container>
    </Styled.Main>
    <Footer />
  </Page>
)

About.propTypes = {
  animals: animalsType.isRequired,
  supporting: supportingType.isRequired,
  adoptedAnimals: adoptedAnimalsType.isRequired,
}

export default About
