import { useTheme } from "@emotion/react"

import Container from "design-system/components/container"
import Typography from "design-system/components/typography"

import * as Styled from "./Hero.styled"

const Hero = () => (
  <Styled.Header>
    <Container>
      <Styled.HeaderWrapper>
        <Typography variant="h2">
          Polityka prywatności fundacji Sterczące Uszy
        </Typography>
      </Styled.HeaderWrapper>
    </Container>
  </Styled.Header>
)

export default Hero
