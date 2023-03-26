import { number } from "prop-types"

import DecorativeCard from "design-system/patterns/decorativeCard"
import TextBanner from "design-system/patterns/textBanner"
import Typography from "design-system/components/typography"

import * as Styled from "./Achievements.styled"

const Achievements = ({
  supportingNumber,
  animalsNumber,
  adoptedAnimalsNumber,
}) => {
  const cardsData = [
    {
      illustrationName: "heart",
      count: supportingNumber,
      description:
        "To liczba dobrych serc ludzi, dzięki którym możemy pomagać zwierzakom",
    },
    {
      illustrationName: "home",
      count: adoptedAnimalsNumber,
      description:
        "To liczba nowych domów, gdzie nasi podopieczni zostali otoczeni opieką",
    },
    {
      illustrationName: "dog",
      count: adoptedAnimalsNumber + animalsNumber,
      description:
        "To liczba pupili, którzy są pod naszą opieką i którym już udzieliłyśmy pomocy",
    },
  ]

  return (
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
      <Styled.Container>
        {cardsData.map(({ illustrationName, count, description }) => (
          <Styled.CardContainer key={description}>
            <DecorativeCard illustrationName={illustrationName} count={count} />
            <Typography variant="h4">{description}</Typography>
          </Styled.CardContainer>
        ))}
      </Styled.Container>
    </Styled.Achievements>
  )
}

Achievements.propTypes = {
  supportingNumber: number.isRequired,
  animalsNumber: number.isRequired,
  adoptedAnimalsNumber: number.isRequired,
}

export default Achievements
