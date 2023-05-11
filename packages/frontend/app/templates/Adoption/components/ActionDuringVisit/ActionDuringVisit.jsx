import { useTheme } from "@emotion/react"
import Title from "design-system/components/title"
import Container from "design-system/components/container"
import Typography from "design-system/components/typography"
import Card from "design-system/patterns/card/Card"
import TextBanner from "design-system/patterns/textBanner"
import * as Styled from "./ActionDuringVisit.styled"

const ActionDuringVisit = () => {
  const theme = useTheme()

  return (
    <Container as="section">
      <Styled.Content>
        <TextBanner
          heading="Wizyta"
          headingColor={theme.colors.gray[600]}
          subtitle="Co robimy w czasie wizyty?"
          layout="center"
          tabletLayout="center"
          mobileLayout="center"
        >
          <Styled.TextContainer>
            <Typography variant="bodyTitle">
              Poznajemy się lepiej. Wymieniamy doświadczeniami. Omawiamy
              potencjalne zagrożenia i sposoby, aby ich uniknąć.
            </Typography>
          </Styled.TextContainer>
        </TextBanner>
        <Styled.BannerContent>
          <Styled.CardsContainer>
            <Card
              title={<Title text="Doradzamy" textSize="h3" />}
              illustrationName="bowl"
              layout="center"
              tabletLayout="center"
              mobileLayout="center"
            >
              <Styled.Description variant="bodyTitle">
                Udzielamy porad odnośnie żywienia pupila, a także doradzamy w
                kwestii weterynarza czy behawiorysty.
              </Styled.Description>
            </Card>
            <Card
              title={<Title text="Sprawdzamy" textSize="h3" />}
              illustrationName="protect"
              layout="center"
              tabletLayout="center"
              mobileLayout="center"
            >
              <Styled.Description variant="bodyTitle">
                Zwracamy uwagę na elementy typu ogrodzenie czy schody, aby
                zwierzę było bezpieczne.
              </Styled.Description>
            </Card>
            <Card
              title={<Title text="Rozmawiamy" textSize="h3" />}
              illustrationName="womanAndDog"
              layout="center"
              tabletLayout="center"
              mobileLayout="center"
            >
              <Styled.Description variant="bodyTitle">
                Zwracamy uwagę na elementy typu ogrodzenie czy schody, aby
                zwierzę było bezpieczne.
              </Styled.Description>
            </Card>
          </Styled.CardsContainer>
        </Styled.BannerContent>
      </Styled.Content>
    </Container>
  )
}

export default ActionDuringVisit
