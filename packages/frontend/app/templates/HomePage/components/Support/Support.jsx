import Typography from "design-system/components/typography"
import Button from "design-system/components/button"
import Title from "design-system/components/title"

import TextBanner from "design-system/patterns/textBanner"

import * as Styled from "./Support.styled"

const list = [
  {
    title: "Kierowcy",
    icon: "charity",
  },
  {
    title: "Groomera/ki",
    icon: "charity",
  },
  {
    title: "Fotografa/ki",
    icon: "charity",
  },
  {
    title: "Behawiorysty/ki",
    icon: "charity",
  },
]

const Support = () => (
  <Styled.Wrapper>
    <Styled.Content>
      <TextBanner
        heading="Potrzebujemy wsparcia"
        subtitle="Wolontariat"
        size="medium"
      >
        Mimo, że z całego serca staramy się pomagać zwierzętom, nie jesteśmy w
        stanie zrobić wszystkiego same. Dlatego szukamy ludzi, którzy chcą
        dołączyć do naszych działań i razem z nami czynić dobro.
      </TextBanner>

      <Typography variant="h5" as="p">
        Aktualnie poszukujemy:
      </Typography>

      <Styled.List>
        {list.map((item) => (
          <Styled.Item key={item.title}>
            <Styled.Icon name={item.icon} />
            <Title text={item.title} textSize="bodyTitle" />
          </Styled.Item>
        ))}
      </Styled.List>

      <Button text="Poznaj szczegóły" href="/jak-pomoc" size="large" />
    </Styled.Content>
  </Styled.Wrapper>
)

export default Support
