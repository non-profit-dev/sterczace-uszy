import { useTheme } from "@emotion/react"

import Button from "design-system/components/button"
import List from "design-system/components/list"
import Title from "design-system/components/title"
import ListItem from "design-system/components/listItem"
import Container from "design-system/components/container"
import Typography from "design-system/components/typography"
import Card from "design-system/patterns/card/Card"
import TextBanner from "design-system/patterns/textBanner"

import * as Styled from "./Actions.styled"

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
            <Card
              title={<Title text="Pomagamy" textSize="h3" />}
              illustrationName="help"
              layout="center"
              tabletLayout="center"
              mobileLayout="center"
            >
              <List gap={8}>
                <ListItem variant="gray" iconName="check">
                  Umożliwiamy adopcję za granicę
                </ListItem>
                <ListItem variant="gray" iconName="check">
                  Pomagamy w adopcji
                </ListItem>
                <ListItem variant="gray" iconName="check">
                  Prowadzimy zbiórki wirtualne
                </ListItem>
              </List>
            </Card>
            <Card
              title={<Title text="Chronimy" textSize="h3" />}
              illustrationName="protect"
              layout="center"
              tabletLayout="center"
              mobileLayout="center"
            >
              <List gap={8}>
                <ListItem variant="gray" iconName="check">
                  Znajdujemy domy tymczasowe
                </ListItem>
                <ListItem variant="gray" iconName="check">
                  Szczepimy i budujemy odporność
                </ListItem>
                <ListItem variant="gray" iconName="check">
                  Szukamy różnych form pomocy
                </ListItem>
              </List>
            </Card>
            <Card
              title={<Title text="Leczymy" textSize="h3" />}
              illustrationName="treat"
              layout="center"
              tabletLayout="center"
              mobileLayout="center"
            >
              <List gap={8}>
                <ListItem variant="gray" iconName="check">
                  Leczymy pilne przypadki
                </ListItem>
                <ListItem variant="gray" iconName="check">
                  Zapewniamy opiekę weterynaryjną
                </ListItem>
                <ListItem variant="gray" iconName="check">
                  Stosujemy zabiegi profilaktyczne
                </ListItem>
              </List>
            </Card>
          </Styled.CardsContainer>
        </Styled.BannerContent>
        <Styled.ButtonWrapper>
          <Button
            text="Sprawdź aktualności"
            href="https://www.facebook.com/sterczaceuszy"
            target="_blank"
            size="large"
          />
        </Styled.ButtonWrapper>
      </Styled.Content>
    </Container>
  )
}

export default Actions
