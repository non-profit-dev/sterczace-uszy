import Container from "design-system/components/container"
import Banner from "design-system/components/banner"
import Button from "design-system/components/button"
import Navigation from "design-system/blocks/navigation"
import Footer from "design-system/blocks/footer"
import ScrollButton from "design-system/components/scrollButton"
import Typography from "design-system/components/typography"
import OurSupport from "./components/OurSupport"

import { animalType, animalsType } from "../../lib/types"

import Page from "../Page"

import Hero from "./components/Hero"
import Gallery from "./components/Gallery"
import Details from "./components/Details"
import MoreInfo from "./components/MoreInfo"

import * as Styled from "./Animal.styled"
import OtherAnimals from "./components/OtherAnimals/OtherAnimals"

const Animal = ({ data, otherAnimals }) => (
  <Page title={`${data.name} - Nasi podopieczni`}>
    <Styled.Banner>
      <Banner
        heading="Nasi podopieczni czekają na Twoje wsparcie! Chcesz nam pomóc? Zajrzyj"
        button={
          <Button text="tutaj" href="/wsparcie" variant="text" size="xsmall" />
        }
      />
    </Styled.Banner>

    <Navigation />

    <Styled.Main>
      <Hero name={data.name} />
      <Container>
        <Styled.Section>
          <Gallery
            imageSrc={data?.thumbnail?.url}
            images={data?.imagesCollection?.items}
          />

          <Details
            gender={data.gender}
            age={data.age}
            height={data.height}
            weight={data.weight}
            targetWeight={data.targetWeight}
            location={data.location2}
            health={data?.health}
            behavior={data?.behavior}
            info={data?.additionalInfo}
          />
        </Styled.Section>

        <MoreInfo
          story={data.story?.json}
          behaviorStory={data.behaviorStory?.json}
          healthStory={data.healthStory?.json}
          socialBehavior={data.socialBehavior?.json}
          important={data.important?.json}
          needs={data.needs?.json}
          family={data.family?.json}
        />
        <Styled.ScrollContainer>
          <Typography variant="h3">
            Sprawdź, kto jeszcze czeka na miłość
          </Typography>
          <ScrollButton sectionId="other-animals" />
        </Styled.ScrollContainer>
      </Container>

      <OtherAnimals data={otherAnimals.items} />
      <OurSupport />
    </Styled.Main>

    <Footer />
  </Page>
)

Animal.propTypes = {
  data: animalType.isRequired,
  otherAnimals: animalsType.isRequired,
}

export default Animal
