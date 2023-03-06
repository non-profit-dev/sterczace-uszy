import { shape, arrayOf, string, number } from "prop-types"

import Container from "design-system/components/container"

import Navigation from "design-system/blocks/navigation"
import Footer from "design-system/blocks/footer"

import Achievements from "./components/Achievements"
import Animals from "./components/Animals"
import Supporters from "./components/Supporters"

import Page from "../Page"

import * as Styled from "./HomePage.styled"

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

        <Animals data={animals.items} />

        <Supporters data={supporting.items} />
      </Container>
    </Styled.Main>

    <Footer />
  </Page>
)

HomePage.propTypes = {
  animals: shape({
    items: arrayOf(
      shape({
        name: string,
        gender: string,
        age: string,
        excerpt: string,
      })
    ),
  }).isRequired,
  supporting: shape({
    items: arrayOf(
      shape({
        name: string,
        description: string,
        url: string,
      })
    ),
  }).isRequired,
  adoptedAnimals: shape({
    total: number,
  }).isRequired,
}

export default HomePage
