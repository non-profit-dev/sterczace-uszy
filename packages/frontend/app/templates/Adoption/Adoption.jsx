import Container from "design-system/components/container"
import Banner from "design-system/components/banner"
import Button from "design-system/components/button"
import Typography from "design-system/components/typography"

import Navigation from "design-system/blocks/navigation"
import Footer from "design-system/blocks/footer"

import Page from "../Page"

import {
  supportingType,
  animalsType,
  adoptedAnimalsType,
} from "../../lib/types"

import * as Styled from "./Adoption.styled"

const Adoption = ({ animals, supporting, adoptedAnimals }) => (
  <Page title="Nasi podopieczni">
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
    </Styled.Main>

    <Footer />
  </Page>
)

Adoption.propTypes = {
  animals: animalsType.isRequired,
  supporting: supportingType.isRequired,
  adoptedAnimals: adoptedAnimalsType.isRequired,
}

export default Adoption
