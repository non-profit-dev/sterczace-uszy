import { number } from "prop-types"

import DecorativeCard from "design-system/patterns/decorativeCard"
import TextBanner from "design-system/patterns/textBanner"
import Typography from "design-system/components/typography"
import Container from "design-system/components/container"

import * as Styled from "./Achievements.styled"

const Achievements = ({
  supportingNumber,
  animalsNumber,
  adoptedAnimalsNumber,
}) => {
  const decorativeData = [
    {
      illustrationName: "heart",
      count: supportingNumber,
      title: "Pomocnych serc",
    },
    {
      illustrationName: "home",
      count: adoptedAnimalsNumber,
      title: "Znalezionych domów",
    },
    {
      illustrationName: "dog",
      count: adoptedAnimalsNumber + animalsNumber,
      title: "Uratowanych zwierząt",
    },
  ]
  return (
    <Container as="section">
      <Styled.Achievements>
        <TextBanner
          heading="Nasze osiągnięcia"
          subtitle="Fundacja w liczbach"
          layout="center"
        >
          <Styled.Description>
            <Typography variant="bodyTitle">
              Te liczby są dla nas ważne. Działamy, aby stale rosły. Pokazują
              nasze zaangażowanie i Waszą pomoc. Razem możemy więcej.
            </Typography>
          </Styled.Description>
        </TextBanner>
        <Styled.MainContainer>
          {decorativeData.map(({ illustrationName, count, title }) => (
            <DecorativeCard
              key={illustrationName}
              illustrationName={illustrationName}
              count={count}
              title={title}
            />
          ))}
        </Styled.MainContainer>
      </Styled.Achievements>
    </Container>
  )
}

Achievements.propTypes = {
  supportingNumber: number.isRequired,
  animalsNumber: number.isRequired,
  adoptedAnimalsNumber: number.isRequired,
}

export default Achievements
