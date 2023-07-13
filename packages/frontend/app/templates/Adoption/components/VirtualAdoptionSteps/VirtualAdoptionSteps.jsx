import Title from "design-system/components/title"
import Container from "design-system/components/container"
import Typography from "design-system/components/typography"
import Card from "design-system/patterns/card/Card"
import ScrollButton from "design-system/components/scrollButton"
import * as Styled from "./VirtualAdoptionSteps.styled"

const cardsData = [
  {
    title: <Title text="Wybierz pupila" textSize="h3" />,
    illustrationName: "pet",
    description:
      "Zadecyduj, kto ma zostać Twoim wirtualnym przyjacielem i zapamiętaj jego imię. Możesz adoptować dowolną liczbę pupili.",
  },
  {
    title: <Title text="Ustaw zlecenie stałe" textSize="h3" />,
    illustrationName: "standingOrder",
    description:
      "Na swoim koncie bankowym ustaw polecenie przelewu. Koniecznie z dopiskiem: “darowizna i imię podopiecznego”.",
  },
  {
    title: <Title text="Wyślij potwierdzenie" textSize="h3" />,
    illustrationName: "confirmation",
    description:
      "Wyślij informację za pomocą krótkiego formularza na stronie, żebyśmy mogli znalezć Twoją wpłatę i informować o stanie pupila.",
  },
]

const VirtualAdoptionSteps = () => (
  <Container as="section">
    <Styled.Content>
      <Styled.BannerContainer>
        <Styled.Banner
          heading="Co zrobić, aby stać się  wirtualnym opiekunem?"
          subtitle="Kroki adopcji wirtualnej"
          layout="center"
        >
          <Typography variant="bodyTitle">
            To proste. Tu znajdziesz informacje, co należy po kolei zrobić, aby
            adoptować wirtualnie.
          </Typography>
        </Styled.Banner>
      </Styled.BannerContainer>
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
      <Styled.ScrollContainer>
        <Typography variant="h3">Sprawdź, kto czeka na opiekuna</Typography>
        <ScrollButton
          sectionId="wirtualy-przyjaciel"
          ariaLabel="Przejdź do kolejnej sekcji"
        />
      </Styled.ScrollContainer>
    </Styled.Content>
  </Container>
)

export default VirtualAdoptionSteps
