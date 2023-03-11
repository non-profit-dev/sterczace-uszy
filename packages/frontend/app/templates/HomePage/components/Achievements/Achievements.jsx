import { number } from "prop-types"

import Typography from "design-system/components/typography"

import * as Styled from "./Achievements.styled"

const Achievements = ({
  supportingNumber,
  animalsNumber,
  adoptedAnimalsNumber,
}) => (
  <Styled.TextContainer>
    <Typography variant="h4" as="h3">
      ♥️ {supportingNumber} Pomocnych serc
    </Typography>
    <Typography variant="h4" as="h3">
      🏡 {animalsNumber} Znalezionych domów
    </Typography>
    <Typography variant="h4" as="h3">
      🏡 {adoptedAnimalsNumber + animalsNumber} Uratowanych zwierząt
    </Typography>
  </Styled.TextContainer>
)

Achievements.propTypes = {
  supportingNumber: number.isRequired,
  animalsNumber: number.isRequired,
  adoptedAnimalsNumber: number.isRequired,
}

export default Achievements
