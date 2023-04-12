import { useTheme } from "@emotion/react"

import Button from "design-system/components/button"
import Container from "design-system/components/container"
import Typography from "design-system/components/typography"

import TextBanner from "design-system/patterns/textBanner"

import * as Styled from "./About.styled"

const About = () => {
  const theme = useTheme()

  return (
    <Styled.Wrapper>
      <Container>
        <Styled.Content>
          <Styled.Image src="home/about-section-image.png" alt="" />
          <TextBanner
            heading="Zwierzęta to nasza  rodzina"
            headingColor={theme.colors.gray[600]}
            subtitle="O nas"
            tabletLayout="left"
            mobileLayout="left"
            button={
              <Button
                text="Poznaj nas lepiej"
                color="primary"
                href="/fundacja"
                size="large"
              />
            }
          >
            <Styled.TextContainer>
              <Typography variant="bodyTitle">
                Od zawsze naszą pasją było pomaganie. Przez wiele lat
                angażowałyśmy się w wolontariat oraz byłyśmy domem tymczasowym
                dla wielu bezdomnych zwierząt.
              </Typography>
              <Typography variant="bodyTitle">
                Teraz jako fundacja, wkładamy całe serce w pomoc naszym
                podopiecznym. Najważniejsze dla nas jest zapewnienie im spokoju,
                bezpieczeństwa i miłości, a także znalezienie dla nich nowych,
                kochających rodzin.
              </Typography>
              <Typography variant="bodyTitle">
                Jesteśmy przekonani, że tylko dzięki zaufaniu i wzajemnej
                współpracy możemy razem osiągnąć więcej.
              </Typography>
            </Styled.TextContainer>
          </TextBanner>
        </Styled.Content>
      </Container>
    </Styled.Wrapper>
  )
}

export default About
