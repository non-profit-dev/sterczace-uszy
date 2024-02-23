import Container from "design-system/components/container"
import Typography from "design-system/components/typography"

import * as Styled from "./Hero.styled"

const Hero = () => (
  <Styled.Header>
    <Container>
      <Styled.HeaderWrapper>
        <Typography variant="h1">Regulamin płatności</Typography>
        <Typography variant="bodyTitle">
          Tutaj znajdziesz informacje jakiego rodzaju wpłaty przyjmujemy, kto
          jest operatorem płatności oraz jak wygląda procedura reklamacji.
        </Typography>
      </Styled.HeaderWrapper>
    </Container>
  </Styled.Header>
)

export default Hero
