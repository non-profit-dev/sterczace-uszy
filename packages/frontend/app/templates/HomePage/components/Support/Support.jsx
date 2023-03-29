import Title from "design-system/components/title"
import Container from "design-system/components/container"

import TextBanner from "design-system/patterns/textBanner"

import * as Styled from "./Support.styled"

const list = [
  {
    title: "Kierowcy",
    illustration: "car",
  },
  {
    title: "Groomera/ki",
    illustration: "scissors",
  },
  {
    title: "Fotografa/ki",
    illustration: "camera",
  },
  {
    title: "Behawiorysty/ki",
    illustration: "training",
  },
]

const Support = () => (
  <Styled.Wrapper>
    <Container>
      <Styled.Content>
        <TextBanner
          heading="Potrzebujemy wsparcia"
          subtitle="Wolontariat"
          tabletLayout="left"
          mobileLayout="left"
        >
          Mimo, że z całego serca staramy się pomagać zwierzętom, nie jesteśmy w
          stanie zrobić wszystkiego same. Dlatego szukamy ludzi, którzy chcą
          dołączyć do naszych działań i razem z nami czynić dobro.
        </TextBanner>

        <Styled.Typography variant="h5" as="p">
          Aktualnie poszukujemy:
        </Styled.Typography>

        <Styled.List>
          {list.map((item) => (
            <Styled.Item key={item.title}>
              <Styled.Icon name={item.illustration} />
              <Title text={item.title} textSize="bodyTitle" hideLineOnMobile />
            </Styled.Item>
          ))}
        </Styled.List>
      </Styled.Content>
    </Container>
  </Styled.Wrapper>
)

export default Support
