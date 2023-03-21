import { number } from "prop-types"

import DecorativeCard from "design-system/patterns/decorativeCard"
import TextBanner from "design-system/patterns/textBanner"
import Typography from "design-system/components/typography"

import * as Styled from "./Achievements.styled"

const Achievements = ({
  supportingNumber,
  animalsNumber,
  adoptedAnimalsNumber,
}) => (
  <Styled.Achievements>
    <TextBanner
      heading="Nasze osiągnięcia"
      subtitle="FUNDACJA W LICZBACH"
      layout="center"
    >
      <Typography variant="bodyTitle">
        Te liczby są dla nas ważne. Działamy, aby stale rosły. Pokazują nasze
        zaangażowanie i Waszą pomoc. Razem możemy więcej.
      </Typography>
    </TextBanner>
    <Styled.MainContainer>
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
    </Styled.MainContainer>
  </Styled.Achievements>
)

Achievements.propTypes = {
  supportingNumber: number.isRequired,
  animalsNumber: number.isRequired,
  adoptedAnimalsNumber: number.isRequired,
}

export default Achievements
