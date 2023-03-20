import { number } from "prop-types"

import Typography from "design-system/components/typography"
import DecorativeCard from "design-system/patterns/decorativeCard"

import * as Styled from "./Achievements.styled"

const Achievements = ({
  supportingNumber,
  animalsNumber,
  adoptedAnimalsNumber,
}) => (
  <Styled.TextContainer>
    <DecorativeCard
      illustrationName="heart"
      count={supportingNumber}
      title="Pomocnych serc"
    />
    <DecorativeCard
      illustrationName="home"
      count={animalsNumber}
      title="Znalezionych domów"
    />
    <DecorativeCard
      illustrationName="dog"
      count={adoptedAnimalsNumber + animalsNumber}
      title="Uratowanych zwierząt"
    />
  </Styled.TextContainer>
)

Achievements.propTypes = {
  supportingNumber: number.isRequired,
  animalsNumber: number.isRequired,
  adoptedAnimalsNumber: number.isRequired,
}

export default Achievements
