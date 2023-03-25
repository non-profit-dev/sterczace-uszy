import Container from "design-system/components/container"
import Banner from "design-system/components/banner"
import Button from "design-system/components/button"

import Navigation from "design-system/blocks/navigation"
import Footer from "design-system/blocks/footer"

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
      <Hero />

      <About />

      <Actions />

      <Container>
        <Achievements
          supportingNumber={supporting.total}
          animalsNumber={animals.total}
          adoptedAnimalsNumber={adoptedAnimals.total}
        />
      </Container>
      <Animals data={animals.items} />
      <Container>
        <Adoption />
      </Container>

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
