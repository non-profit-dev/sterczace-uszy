import { shape, arrayOf, string } from "prop-types"

import Button from "design-system/components/button"
import Slider from "design-system/components/slider"
import Container from "design-system/components/container"

import TextBanner from "design-system/patterns/textBanner"
import AnimalCard from "design-system/patterns/animalCard"

import * as Styled from "./Animals.styled"

const Animals = ({ data }) => (
  <Styled.Wrapper>
    <Container>
      <Styled.ContentContainer>
        <TextBanner
          heading="Szukają domu"
          subtitle="Nasi podopieczni"
          tabletLayout="left"
          mobileLayout="left"
        >
          Oferujemy dom i schronienie dla psów i kotów. Dokładamy wszelkich
          starań, aby zapewnić im jak najlepsze życie. Jeśli chcesz pomóc,
          zapraszamy do sprawdzenia, kto czeka na nowy dom.
        </TextBanner>
      </Styled.ContentContainer>

      <Styled.CardsWrapper>
        {data
          .slice(0, 6)
          .map(({ name, age, gender, excerpt, thumbnail, slug }) => (
            <Styled.CardWrapper key={name}>
              <AnimalCard
                key={name}
                name={name}
                age={age}
                gender={gender}
                excerpt={excerpt}
                slug={slug}
                image={thumbnail.url}
              />
            </Styled.CardWrapper>
          ))}
      </Styled.CardsWrapper>

      <Styled.SliderWrapper>
        <Slider>
          {data
            .slice(0, 6)
            .map(({ name, age, gender, excerpt, thumbnail, slug }) => (
              <AnimalCard
                key={name}
                name={name}
                age={age}
                gender={gender}
                excerpt={excerpt}
                slug={slug}
                image={thumbnail.url}
              />
            ))}
        </Slider>
      </Styled.SliderWrapper>
      <Styled.ButtonWrapper>
        <Button text="Zobacz wszystkich" href="/do-adopcji" size="large" />
      </Styled.ButtonWrapper>
    </Container>
  </Styled.Wrapper>
)

Animals.propTypes = {
  data: arrayOf(
    shape({
      name: string,
      description: string,
      url: string,
    })
  ).isRequired,
}

export default Animals
