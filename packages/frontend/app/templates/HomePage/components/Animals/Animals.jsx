import { shape, arrayOf, string } from "prop-types"
import { useTheme } from "@emotion/react"

import TextBanner from "design-system/patterns/textBanner"
import Button from "design-system/components/button"
import AnimalCard from "design-system/patterns/animalCard"
import Slider from "design-system/components/slider"

import * as Styled from "./Animals.styled"

const Animals = ({ data }) => {
  const theme = useTheme()

  return (
    <>
      <Styled.ContentContainer>
        <TextBanner
          heading="Szukają domu"
          subtitle="NASI PODOPIECZNI"
          descriptionColor={theme.colors.gray[600]}
        >
          Zapewniamy dom i schronienie dla psów i kotów. Obecnie pod naszą
          opieką jest 5 zwierzaków, ale ciągle przyjmujemy nowych podopiecznych.
          Dokładamy wszelkich starań, aby zapewnić im jak lepsze życie. Jeśli
          chcesz pomóc, sprawdź, kto czeka na nowy dom.
        </TextBanner>
      </Styled.ContentContainer>
      <Styled.Wrapper>
        {/* <Styled.SliderWrapper>
          <Slider> */}
        {data.slice(0, 6).map((animal) => (
          <Styled.CardsWrapper key={animal.name}>
            <AnimalCard
              name={animal.name}
              age={animal.age}
              gender={animal.gender}
              excerpt={animal.excerpt}
              slug={animal.slug}
              image={animal.thumbnail.url}
            />
          </Styled.CardsWrapper>
        ))}
        {/* </Slider>
        </Styled.SliderWrapper> */}
      </Styled.Wrapper>
      <Styled.ButtonWrapper>
        <Button text="Zobacz wszystkich" href="/nasi-podopieczni" />
      </Styled.ButtonWrapper>
    </>
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
