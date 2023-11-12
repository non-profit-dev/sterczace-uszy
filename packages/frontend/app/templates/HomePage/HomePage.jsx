import Navigation from "design-system/blocks/navigation"
import Footer from "design-system/blocks/footer"
import SupportBanner from "design-system/blocks/supportBanner"

import Hero from "./components/Hero"
import Adoption from "./components/Adoption"
import Achievements from "./components/Achievements"
import Animals from "./components/Animals"
import Support from "./components/Support"
import Supporters from "./components/Supporters"
import About from "./components/About"

import Page from "../Page"

import * as Styled from "./HomePage.styled"

import {
  supportingType,
  animalsType,
  adoptedAnimalsType,
} from "../../lib/types"
import Actions from "./components/Actions"

const HomePage = ({ animals, supporting, adoptedAnimals }) => (
  <Page>
    <SupportBanner />

    <Navigation />

    <Styled.Main>
      <Hero />
      <About />
      <Achievements
        supportingNumber={supporting.total}
        animalsNumber={animals.total}
        adoptedAnimalsNumber={adoptedAnimals.total}
      />
      <Actions />
      <Animals data={animals.items} />
      <Adoption />
      <Support />
      <Supporters data={supporting.items} />
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
