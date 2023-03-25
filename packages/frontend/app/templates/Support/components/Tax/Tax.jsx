import { useTheme } from "@emotion/react"

import Count from "design-system/components/count"
import Container from "design-system/components/container"
import Typography from "design-system/components/typography"
import Illustration from "design-system/components/illustration"

import TextBanner from "design-system/patterns/textBanner"

import * as Styled from "./Tax.styled"

const Tax = () => {
  const theme = useTheme()

  return (
    <Styled.Wrapper>
      <Container as="section" id="podatek">
        <Styled.Content>
          <Styled.Graphic>
            <Illustration name="dogCat" />
            <Styled.Header>
              <Typography variant="h1">Przekaż</Typography>
              <Count count="1.5%" variant="decorative" />
              <Typography variant="h3">KRS: 0000270261</Typography>
            </Styled.Header>
          </Styled.Graphic>

          <div>
            <TextBanner
              subtitle="1.5% podatku"
              heading="Twoja pomoc ma moc"
              descriptionColor={theme.colors.gray[600]}
            >
              Możesz wesprzeć działania naszej Fundacji przekazując 1,5% swojego
              podatku na konto Fundacji. Aby to zrobić w trakcie wypełniania
              swojego zeznania podatkowego wybierz:
            </TextBanner>

            <Styled.Info>
              <Typography variant="bodyTitle">Numer KRS:</Typography>
              <Typography variant="bodyTitle">
                <strong>0000270261</strong>
              </Typography>
            </Styled.Info>

            <Styled.Info>
              <Typography variant="bodyTitle">Dopisek:</Typography>
              <Typography variant="bodyTitle">
                <strong>Fundacja Sterczące Uszy 13146</strong>
              </Typography>
            </Styled.Info>
          </div>
        </Styled.Content>
      </Container>
    </Styled.Wrapper>
  )
}

export default Tax
