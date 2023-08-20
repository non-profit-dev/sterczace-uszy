import Title from "design-system/components/title"
import Container from "design-system/components/container"
import Typography from "design-system/components/typography"
import Card from "design-system/patterns/card/Card"
import TextBanner from "design-system/patterns/textBanner"
import * as Styled from "./ActionDuringVisit.styled"

const cardsData = [
  {
    title: <Title text="Doradzamy" as="h3" />,
    illustrationName: "bowl",
    description:
      "Udzielamy porad odnośnie żywienia pupila, a także doradzamy w kwestii weterynarza czy behawiorysty.",
  },
  {
    title: <Title text="Sprawdzamy" as="h3" />,
    illustrationName: "protect",
    description:
      "Zwracamy uwagę na elementy typu ogrodzenie czy schody, aby zwierzę było bezpieczne.",
  },
  {
    title: <Title text="Rozmawiamy" as="h3" />,
    illustrationName: "womanAndDog",
    description:
      "Upewniamy się czy wiesz jak zaopiekować się nowym członkiem Waszej rodziny.",
  },
]

const ActionDuringVisit = () => (
  <Container as="section">
    <Styled.Content>
      <TextBanner
        heading="Co robimy w czasie wizyty?"
        subtitle="Wizyta"
        layout="center"
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
          {cardsData.map(({ description, title, illustrationName }) => (
            <Card
              key={description}
              title={title}
              illustrationName={illustrationName}
              layout="center"
            >
              <Typography variant="bodyTitle">{description}</Typography>
            </Card>
          ))}
        </Styled.CardsContainer>
      </Styled.BannerContent>
    </Styled.Content>
  </Container>
)

export default ActionDuringVisit
