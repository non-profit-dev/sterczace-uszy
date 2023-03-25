import Container from "design-system/components/container"
import Banner from "design-system/components/banner"
import Button from "design-system/components/button"
import Typography from "design-system/components/typography"

import Navigation from "design-system/blocks/navigation"
import Footer from "design-system/blocks/footer"

import AboutUs from "./components/AboutUs"
import Supporters from "./components/Supporters"

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
            href="/jak-pomoc"
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
        <Typography variant="h4" as="h3">
          ♥️ {supporting.total} Pomocnych serc
        </Typography>
        <Typography variant="h4" as="h3">
          🏡 {adoptedAnimals.total} Znalezionych domów
        </Typography>
        <Typography variant="h4" as="h3">
          🏡 {animals.total + adoptedAnimals.total} Uratowanych zwierząt
        </Typography>
      </Container>

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
