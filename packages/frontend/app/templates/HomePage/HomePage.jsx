import Container from "design-system/components/container"

import Navigation from "design-system/blocks/navigation"
import Footer from "design-system/blocks/footer"

import Achievements from "./components/Achievements"
import Animals from "./components/Animals"
import Support from "./components/Support"
import Supporters from "./components/Supporters"

import Page from "../Page"

import * as Styled from "./HomePage.styled"

import { supportingType, animalsType, adoptedAnimalsType } from "./types"

const HomePage = ({ animals, supporting, adoptedAnimals }) => (
  <Page>
    <Navigation />

    <Styled.Main>
      <Container>
        <Achievements
          supportingNumber={supporting.total}
          animalsNumber={animals.total}
          adoptedAnimalsNumber={adoptedAnimals.total}
        />
      </Container>

      <Container>
        <Animals data={animals.items} />
      </Container>

      <Support />

      <Container>
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
