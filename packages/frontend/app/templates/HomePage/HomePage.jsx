import Container from "design-system/components/container"
import Banner from "design-system/components/banner"
import Button from "design-system/components/button"

import Navigation from "design-system/blocks/navigation"
import Footer from "design-system/blocks/footer"

import Achievements from "./components/Achievements"
import Animals from "./components/Animals"
import Supporters from "./components/Supporters"

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
      <Container>
        <Actions />
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
