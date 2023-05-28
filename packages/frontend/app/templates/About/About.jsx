import Container from "design-system/components/container"
import Banner from "design-system/components/banner"
import Button from "design-system/components/button"
import Navigation from "design-system/blocks/navigation"
import Footer from "design-system/blocks/footer"

import Achievements from "./components/Achievements"
import AboutUs from "./components/AboutUs"
import Values from "./components/Values"
import Supporters from "./components/Supporters"
import Page from "../Page"

import {
  supportingType,
  animalsType,
  adoptedAnimalsType,
} from "../../lib/types"

import Microchips from "./components/Microchips"

import * as Styled from "./About.styled"

const About = ({ animals, supporting, adoptedAnimals }) => (
  <Page title="O nas">
    <Styled.Banner>
      <Banner
        heading="Nasi podopieczni czekają na Twoje wsparcie! Chcesz nam pomóc? Zajrzyj"
        button={
          <Button text="tutaj" href="/wsparcie" variant="text" size="small" />
        }
      />
    </Styled.Banner>

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
}

export default About
