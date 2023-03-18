import Container from "design-system/components/container"

import Navigation from "design-system/blocks/navigation"
import Footer from "design-system/blocks/footer"

import Achievements from "./components/Achievements"
import Animals from "./components/Animals"
import Supporters from "./components/Supporters"
import About from "./components/About"

import Page from "../Page"

import * as Styled from "./HomePage.styled"

import { supportingType, animalsType, adoptedAnimalsType } from "./types"

const HomePage = ({ animals, supporting, adoptedAnimals }) => (
  <Page>
    <Navigation />

    <Styled.Main>
      <About />
      <Container>
        <Achievements
          supportingNumber={supporting.total}
          animalsNumber={animals.total}
          adoptedAnimalsNumber={adoptedAnimals.total}
        />

        <Animals data={animals.items} />

        <Supporters data={supporting.items} />
      </Container>
    </Styled.Main>

    <Footer />
  </Page>
)

HomePage.propTypes = {
  animals: animalsType.isRequired,
  supporting: supportingType.isRequired,
  adoptedAnimals: adoptedAnimalsType.isRequired,
}

export default HomePage
