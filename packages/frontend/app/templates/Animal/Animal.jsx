import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Container from "design-system/components/container"
import Banner from "design-system/components/banner"
import Button from "design-system/components/button"
import Typography from "design-system/components/typography"
import Navigation from "design-system/blocks/navigation"
import Footer from "design-system/blocks/footer"

import { animalType } from "../../lib/types"

import Page from "../Page"

import Details from "./components/Details"

import * as Styled from "./Animal.styled"

const Animal = ({ data }) => (
  <Page title={`${data.name} - Nasi podopieczni`}>
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
        <Details
          gender={data.gender}
          age={data.age}
          weight={data.weight}
          targetWeight={data.targetWeight}
          health={data?.health}
          behavior={data?.behavior}
          info={data?.info}
          imageSrc={data?.thumbnail?.url}
        />
        <Typography variant="bodyTitle">historia:</Typography>
        {data.story && documentToReactComponents(data.story.json)}
        <Typography variant="bodyTitle">zachowanie:</Typography>
        {data.behaviorStory &&
          documentToReactComponents(data.behaviorStory.json)}
        <Typography variant="bodyTitle">opis zdrowia:</Typography>
        {data.healthStory && documentToReactComponents(data.healthStory.json)}
        <Typography variant="bodyTitle">życie z innymi:</Typography>
        {data.socialBehavior &&
          documentToReactComponents(data.socialBehavior.json)}
      </Container>
    </Styled.Main>

    <Footer />
  </Page>
)

Animal.propTypes = {
  data: animalType.isRequired,
}

export default Animal
