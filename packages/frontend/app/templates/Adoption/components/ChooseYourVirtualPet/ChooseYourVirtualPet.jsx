import { shape, arrayOf, string } from "prop-types"

import Button from "design-system/components/button"

import TextBanner from "design-system/patterns/textBanner"
import AnimalCard from "design-system/patterns/animalCard"
import Container from "design-system/components/container"

import { useState, useEffect } from "react"
import useMediaQuery from "design-system/helpers/useMediaQuery"
import * as Styled from "./ChooseYourVirtualPet.styled"

const ChooseYourVirtualPet = ({ data }) => {
  const CARDS_FOR_DESKTOP = 6
  const CARDS_FOR_TABLET_AND_MOBILE = 3
  const isDesktop = useMediaQuery(`(min-width: 992px)`)
  const initialDisplayedAnimals = isDesktop
    ? CARDS_FOR_DESKTOP
    : CARDS_FOR_TABLET_AND_MOBILE
  const loadMoreAnimalsCount = isDesktop
    ? CARDS_FOR_DESKTOP
    : CARDS_FOR_TABLET_AND_MOBILE

  const [displayedAnimals, setDisplayedAnimals] = useState(
    initialDisplayedAnimals
  )

  useEffect(() => {
    setDisplayedAnimals(
      isDesktop ? CARDS_FOR_DESKTOP : CARDS_FOR_TABLET_AND_MOBILE
    )
  }, [isDesktop])

  const loadMoreAnimals = () => {
    setDisplayedAnimals(
      (prevDisplayedAnimals) => prevDisplayedAnimals + loadMoreAnimalsCount
    )
  }

  return (
    <Container>
      <Styled.Wrapper>
        <Styled.ContentContainer>
          <TextBanner
            heading="Wybierz pupila"
            subtitle="Wirtualny przyjaciel"
            tabletLayout="left"
            mobileLayout="left"
          >
            Tu znajdziesz podopiecznych, którzy czekają na Twoją pomoc. Widok
            pełnej miski, który możesz im dać na pewno sprawi, że będą merdać
            ogonkiem. Często też wymagają leczenia, na które możemy sobie
            pozwolić jedynie, jeśli mamy środki z wpłat.
          </TextBanner>
        </Styled.ContentContainer>

        <Styled.CardsWrapper>
          {data
            .slice(0, displayedAnimals)
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
        {data.length > displayedAnimals && (
          <Styled.ButtonWrapper>
            <Button
              text="Pokaż więcej"
              size="large"
              onClick={loadMoreAnimals}
            />
          </Styled.ButtonWrapper>
        )}
      </Styled.Wrapper>
    </Container>
  )
}

ChooseYourVirtualPet.propTypes = {
  data: arrayOf(
    shape({
      name: string,
      description: string,
      url: string,
    })
  ).isRequired,
}

export default ChooseYourVirtualPet
