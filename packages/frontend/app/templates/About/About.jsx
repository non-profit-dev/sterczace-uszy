import Container from "design-system/components/container"
import Banner from "design-system/components/banner"
import Button from "design-system/components/button"
import Typography from "design-system/components/typography"

import Navigation from "design-system/blocks/navigation"
import Footer from "design-system/blocks/footer"
import Achievements from "./components/AboutUs/Achievements"
import AboutUs from "./components/AboutUs"

import Page from "../Page"

import {
  supportingType,
  animalsType,
  adoptedAnimalsType,
} from "../../lib/types"

import * as Styled from "./About.styled"

const About = ({ animals, supporting, adoptedAnimals }) => (
  <Page title="O nas">
    <Styled.Banner>
      <Banner
        heading="Nasi podopieczni czekają na Twoje wsparcie! Chcesz nam pomóc? Zajrzyj"
        button={
          <Button
            text="tutaj"
            href="/wsparcie"
            variant="textLine"
            size="small"
          />
        }
      />
    </Styled.Banner>

    <Navigation />

    <Styled.Main>
      <AboutUs />
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
