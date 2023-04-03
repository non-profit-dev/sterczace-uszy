import Container from "design-system/components/container"
import Banner from "design-system/components/banner"
import Button from "design-system/components/button"
import Navigation from "design-system/blocks/navigation"
import Footer from "design-system/blocks/footer"

import { animalType } from "../../lib/types"

import Page from "../Page"

import Details from "./components/Details"
import MoreInfo from "./components/MoreInfo"

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
          height={data.height}
          weight={data.weight}
          targetWeight={data.targetWeight}
          health={data?.health}
          behavior={data?.behavior}
          info={data?.additionalInfo}
          imageSrc={data?.thumbnail?.url}
          images={data.imagesCollection.items}
        />

        <MoreInfo
          story={data.story.json}
          behaviorStory={data.behaviorStory.json}
          healthStory={data.healthStory.json}
          socialBehavior={data.socialBehavior.json}
          important={data.important.json}
          needs={data.needs.json}
          family={data.family.json}
        />
      </Container>
    </Styled.Main>

    <Footer />
  </Page>
)

Animal.propTypes = {
  data: animalType.isRequired,
}

export default Animal
