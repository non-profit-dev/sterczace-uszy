import { shape, arrayOf, string } from "prop-types"
import { useTheme } from "@emotion/react"

import TextBanner from "design-system/patterns/textBanner"
import Title from "design-system/components/title"
import Button from "design-system/components/button"
import Card from "design-system/patterns/card"
import Slider from "design-system/components/slider"

import * as Styled from "./Animals.styled"

const Animals = ({ data }) => {
  const theme = useTheme()

  function getAnimalType(age, gender) {
    switch (true) {
      case age < 1:
        return "Szczeniak"
      case age >= 1 && age < 3 && gender === "on":
        return "Młodziak"
      case age >= 1 && age < 3 && gender === "ona":
        return "Młoda suczka"
      case age >= 3 && age < 8 && gender === "on":
        return "Dorosły przystojniak"
      case age >= 3 && age < 8 && gender === "ona":
        return "Dorosła piękność"
      case age >= 8 && gender === "ona":
        return "Seniorka"
      case age >= 8 && gender === "on":
        return "Senior"
      default:
        return ""
    }
  }

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
            <Card
              button={
                <Button
                  iconEnd="arrowRight"
                  text="Poznaj mnie lepiej"
                  variant="text"
                />
              }
              href={`/${animal.slug}`}
              imageAlt={animal.name}
              imageHeight="300px"
              imageSrc={animal.thumbnail.url}
              title={
                <Title
                  badge={getAnimalType(animal.age)}
                  iconEnd={
                    animal.gender === "ona" ? "femaleAnimal" : "maleAnimal"
                  }
                  text={animal.name}
                />
              }
            >
              <Styled.Description variant="bodyTitle">
                {animal.excerpt}
              </Styled.Description>
            </Card>
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
