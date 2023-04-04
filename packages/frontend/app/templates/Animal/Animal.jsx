import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Container from "design-system/components/container"
import Banner from "design-system/components/banner"
import Button from "design-system/components/button"
import Typography from "design-system/components/typography"
import Navigation from "design-system/blocks/navigation"
import Footer from "design-system/blocks/footer"

import { animalType, animalsType } from "../../lib/types"

import Page from "../Page"

import * as Styled from "./Animal.styled"
import OtherAnimals from "./components/OtherAnimals/OtherAnimals"

const Animal = ({ data, otherAnimals }) => (
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
        <Typography variant="h3">imię: {data?.name}</Typography>
        <Typography variant="bodyTitle">
          krótki opis: {data?.excerpt}
        </Typography>
        <Typography variant="bodyTitle">waga: {data?.weight}</Typography>
        <Typography variant="bodyTitle">
          waga docelowa: {data?.targetWeight}
        </Typography>
        <Typography variant="bodyTitle">wiek: {data?.age}</Typography>
        <Typography variant="bodyTitle">płeć: {data?.gender}</Typography>
        <Typography variant="bodyTitle">zdrowie:</Typography>
        {data?.health?.map((item) => (
          <Typography variant="bodyTitle" key={item}>
            - {item}
          </Typography>
        ))}
        <Typography variant="bodyTitle">zachowanie:</Typography>
        {data?.behavior?.map((item) => (
          <Typography variant="bodyTitle" key={item}>
            - {item}
          </Typography>
        ))}
        <Typography variant="bodyTitle">dodatkowe info:</Typography>
        {data?.additionalInfo?.map((item) => (
          <Typography variant="bodyTitle" key={item}>
            - {item}
          </Typography>
        ))}
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
        <img src={data?.thumbnail.url} alt="" width="400" />
      </Container>
      <OtherAnimals data={otherAnimals.items} />
    </Styled.Main>

    <Footer />
  </Page>
)

Animal.propTypes = {
  data: animalType.isRequired,
  otherAnimals: animalsType.isRequired,
}

export default Animal
