import Container from "design-system/components/container"
import Typography from "design-system/components/typography"
import TextBanner from "design-system/patterns/textBanner"
import Button from "design-system/components/button"
import Illustration from "design-system/components/illustration"
import * as Styled from "./SpecialSituations.styled"

const SpecialSituations = () => (
  <Container as="section">
    <Styled.Content>
      <TextBanner
        heading="Wyjątkowe sytuacje"
        subtitle="Wizyta przedadopcyjna"
        tabletLayout="left"
        mobileLayout="left"
        button={
          <Button
            text="Napisz do nas"
            size="medium"
            variant="text"
            iconEnd="arrowRight"
            href="/kontakt"
          />
        }
      >
        <Typography variant="bodyTitle">
          Wiemy, że w życiu zdarza się, że zorganizowanie wizyty może być bardzo
          kłopotliwe, dlatego w wyjątkowych sytuacjach może się ona odbyć
          online, za pośrednictwem Messengera, Zoom, Google duo, Discord. Takie
          spotkanie ustalamy indywidualnie.
        </Typography>
      </TextBanner>
      <Illustration name="information" />
    </Styled.Content>
  </Container>
)

export default SpecialSituations
