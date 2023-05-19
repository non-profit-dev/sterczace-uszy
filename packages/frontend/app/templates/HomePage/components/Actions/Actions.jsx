import { useTheme } from "@emotion/react"
import Button from "design-system/components/button"
import List from "design-system/components/list"
import Title from "design-system/components/title"
import ListItem from "design-system/components/listItem"
import Container from "design-system/components/container"
import Typography from "design-system/components/typography"
import Card from "design-system/patterns/card/Card"
import TextBanner from "design-system/patterns/textBanner"
import globalData from "shared/data"
import * as Styled from "./Actions.styled"

const cardData = [
  {
    title: "Pomagamy",
    illustrationName: "help",
    array: [
      "Leczymy pilne przypadki",
      "Zapewniamy opiekę weterynaryjną",
      "Stosujemy zabiegi profilaktyczne",
    ],
  },
  {
    title: "Chronimy",
    illustrationName: "protect",
    array: [
      "Znajdujemy domy tymczasowe",
      "Szczepimy i budujemy odporność",
      "Szukamy różnych form pomocy",
    ],
  },
  {
    title: "Leczymy",
    illustrationName: "treat",
    array: [
      "Leczymy pilne przypadki",
      "Zapewniamy opiekę weterynaryjną",
      "Stosujemy zabiegi profilaktyczne",
    ],
  },
]

const Actions = () => {
  const theme = useTheme()

  return (
    <Container as="section">
      <Styled.Content>
        <TextBanner
          heading="Nasze działania"
          headingColor={theme.colors.gray[600]}
          subtitle="Co robimy?"
          layout="center"
          tabletLayout="center"
          mobileLayout="center"
        >
          <Styled.TextContainer>
            <Typography variant="bodyTitle">
              Skupiamy się na naszych podopiecznych i wszelkich formach działań,
              które mogą im pomóc teraz i w przyszłości.
            </Typography>
          </Styled.TextContainer>
        </TextBanner>
        <Styled.BannerContent>
          <Styled.CardsContainer>
            {cardData.map(({ illustrationName, title, array }) => (
              <Card
                key={title}
                title={<Title text={title} textSize="h3" />}
                illustrationName={illustrationName}
                layout="center"
                tabletLayout="center"
                mobileLayout="center"
              >
                <List gap={8}>
                  {array.map((item) => (
                    <ListItem variant="gray" iconName="check" key={item}>
                      {item}
                    </ListItem>
                  ))}
                </List>
              </Card>
            ))}
          </Styled.CardsContainer>
        </Styled.BannerContent>
        <Styled.ButtonWrapper>
          <Button
            text="Sprawdź aktualności"
            href={globalData.socialMedia.facebook}
            target="_blank"
            size="large"
          />
        </Styled.ButtonWrapper>
      </Styled.Content>
    </Container>
  )
}

export default Actions
