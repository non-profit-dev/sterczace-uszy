import { shape, arrayOf, string } from "prop-types"
import { useTheme } from "@emotion/react"

import TextBanner from "design-system/patterns/textBanner"
import Title from "design-system/components/title"
import Button from "design-system/components/button"
import Typography from "design-system/components/typography"
import Card from "design-system/patterns/card"

import * as Styled from "./Animals.styled"

const Animals = ({ data }) => {
  const theme = useTheme()
  return (
    <>
      <Styled.ContentContainer>
        <TextBanner
          heading="Szukają domu"
          subtitle="NASI PODOPIECZNI"
          descriptionColor={theme.colors.grey[600]}
        >
          Zapewniamy dom i schronienie dla psów i kotów. Obecnie pod naszą
          opieką jest 5 zwierzaków, ale ciągle przyjmujemy nowych podopiecznych.
          Dokładamy wszelkich starań, aby zapewnić im jak lepsze życie. Jeśli
          chcesz pomóc, sprawdź, kto czeka na nowy dom.
        </TextBanner>
      </Styled.ContentContainer>
      <Styled.Wrapper>
        {data.slice(0, 6).map((animal) => (
          <Styled.CardsWrapper key={animal.name}>
            <Card
              button={
                <Button
                  iconEnd="arrowRight"
                  text="Poznaj mnie lepiej"
                  variant="text"
                  href={`/do-adopcji/${animal.name}`}
                />
              }
              href={`/do-adopcji/${animal.name}`}
              imageAlt={animal.name}
              imageHeight="300px"
              imageSrc={animal.thumbnail.url}
              title={
                <Title
                  badge={animal.age}
                  iconEnd={
                    animal.gender === "ona" ? "femaleAnimal" : "maleAnimal"
                  }
                  text={animal.name}
                />
              }
            >
              <Typography variant="bodyTitle" as="p">
                {animal.excerpt}
              </Typography>
            </Card>
          </Styled.CardsWrapper>
        ))}
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
