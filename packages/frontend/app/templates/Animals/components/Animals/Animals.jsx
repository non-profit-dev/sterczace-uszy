import { shape, arrayOf, string } from "prop-types"

import Button from "design-system/components/button"

import TextBanner from "design-system/patterns/textBanner"
import AnimalCard from "design-system/patterns/animalCard"

import * as Styled from "./Animals.styled"

const Animals = ({ data }) => (
  <Styled.Wrapper>
    <Styled.ContentContainer>
      <TextBanner
        heading="Czekają na nowy dom"
        subtitle="Nasi podopieczni"
        tabletLayout="left"
        mobileLayout="left"
      >
        Każdy z nich jest wyjątkowy. Starszaki i szczeniaki, duże i małe,
        lubiące kanapę lub długie spacery. Potrzebują jedynie miłości. Sprawdź,
        któremu odmienisz życie?
      </TextBanner>
    </Styled.ContentContainer>

    <Styled.CardsWrapper>
      {data.map(({ name, age, gender, excerpt, thumbnail, slug }) => (
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
    <Styled.ButtonWrapper>
      <Button text="Sprawdź zasady adopcji" href="/adopcja" size="large" />
    </Styled.ButtonWrapper>
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
