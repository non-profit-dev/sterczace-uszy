import Container from "design-system/components/container"
import Typography from "design-system/components/typography"
import globalData from "shared/data"

import * as Styled from "./Hero.styled"

const Hero = () => (
  <Styled.Header>
    <Container>
      <Styled.HeaderWrapper>
        <Typography variant="h2">
          Polityka prywatności fundacji {globalData.organizationName}
        </Typography>
      </Styled.HeaderWrapper>
    </Container>
  </Styled.Header>
)

export default Hero
