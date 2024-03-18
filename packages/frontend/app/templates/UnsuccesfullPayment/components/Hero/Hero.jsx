import Container from "design-system/components/container"
import Typography from "design-system/components/typography"

import * as Styled from "./Hero.styled"

const Hero = () => (
  <Styled.Header>
    <Container>
      <Styled.HeaderWrapper>
        <Typography variant="h3" as="h1">
          Płatność nieudana - prosimy o sprawdzenie
        </Typography>
        <Typography variant="bodyTitle">
          Płatność nie została potwierdzona przez Twój bank lub wydawcę karty
          płatniczej.
        </Typography>
      </Styled.HeaderWrapper>
      <Styled.ParagraphWrapper>
        <Typography variant="bodyTitle">
          Spróbuj ponownie rozpoczynając płatność od początku albo klikając w
          link, który otrzymasz emailem.
        </Typography>
      </Styled.ParagraphWrapper>
      <Styled.ImageWrapper>
        <Styled.Image
          src="/unsuccesfull-payment/unsuccesfull-payment.png"
          alt="Nieudana płatność - Sterczące Uszy"
        />
      </Styled.ImageWrapper>
    </Container>
  </Styled.Header>
)

export default Hero
