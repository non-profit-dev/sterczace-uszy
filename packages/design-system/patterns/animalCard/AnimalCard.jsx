import { string } from "prop-types"
import { useTheme } from "@emotion/react"

import Button from "design-system/components/button"
import Title from "design-system/components/title"

import Card from "design-system/patterns/card"

import getAgeNumber from "../../helpers/getAgeNumber"

import * as Styled from "./AnimalCard.styled"

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

const AnimalCard = ({ slug, name, age, gender, excerpt, image, className }) => {
  const theme = useTheme()

  return (
    <Card
      bgColor={theme.colors.neutrals[100]}
      href={`/do-adopcji/${slug}`}
      className={className}
      imageSrc={image}
      imageAlt={name}
      imageHeight="314px"
      badge={age ? getAnimalType(getAgeNumber(age), gender) : null}
      title={
        <Title
          iconEnd={gender === "ona" ? "femaleAnimal" : "maleAnimal"}
          text={name}
          as="h3"
        />
      }
      button={
        <Button
          iconEnd="arrowRight"
          text="Poznaj mnie lepiej"
          variant="text"
          as="div"
        />
      }
    >
      <Styled.Description variant="bodyTitle">{excerpt}</Styled.Description>
    </Card>
  )
}

AnimalCard.propTypes = {
  slug: string.isRequired,
  name: string.isRequired,
  age: string,
  gender: string.isRequired,
  excerpt: string.isRequired,
  image: string.isRequired,
  className: string,
}

AnimalCard.defaultProps = {
  className: null,
  age: null,
}

export default AnimalCard
