import { shape, arrayOf, string } from "prop-types"
import { useTheme } from "@emotion/react"

import Button from "design-system/components/button"
import Slider from "design-system/components/slider"
import Container from "design-system/components/container"

import TextBanner from "design-system/patterns/textBanner"
import AnimalCard from "design-system/patterns/animalCard"

import * as Styled from "./Animals.styled"

const Animals = ({ data }) => {
  const theme = useTheme()

  return (
    <Styled.Wrapper>
      <Container>
        <Styled.ContentContainer>
          <TextBanner
            heading="Szukają domu"
            headingTag="h2"
            subtitle="Nasi podopieczni"
            descriptionColor={theme.colors.gray[600]}
          >
            Zapewniamy dom i schronienie dla psów i kotów. Obecnie pod naszą
            opieką jest 5 zwierzaków, ale ciągle przyjmujemy nowych
            podopiecznych. Dokładamy wszelkich starań, aby zapewnić im jak
            lepsze życie. Jeśli chcesz pomóc, sprawdź, kto czeka na nowy dom.
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
}

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
