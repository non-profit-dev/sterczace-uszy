import { shape, arrayOf, string } from "prop-types"

import Button from "design-system/components/button"
import Container from "design-system/components/container"
import Slider from "design-system/components/slider"

import TextBanner from "design-system/patterns/textBanner"
import AnimalCard from "design-system/patterns/animalCard"

import * as Styled from "./OtherAnimals.styled"

const OtherAnimals = ({ data }) => (
  <Styled.Wrapper>
    <Container id="other-animals">
      <Styled.ContentContainer>
        <TextBanner
          heading="Czekają na nowy dom"
          subtitle="Do adopcji"
          tabletLayout="left"
          mobileLayout="left"
        >
          Każdy z nich jest wyjątkowy. Starszaki i szczeniaki, duże i małe,
          lubiące kanapę lub długie spacery. Potrzebują jedynie miłości.
          Sprawdź, któremu odmienisz życie?
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

OtherAnimals.propTypes = {
  data: arrayOf(
    shape({
      name: string,
      description: string,
      url: string,
    })
  ).isRequired,
}

export default OtherAnimals
