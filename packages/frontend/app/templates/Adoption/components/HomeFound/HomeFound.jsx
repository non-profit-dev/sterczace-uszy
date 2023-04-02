import { useTheme } from "@emotion/react"
import Container from "design-system/components/container"
import Typography from "design-system/components/typography"
import TextBanner from "design-system/patterns/textBanner"
import * as Styled from "./HomeFound.styled"

const HomeFound = () => {
  const theme = useTheme()

  return (
    <Styled.Wrapper>
      <Container>
        <Styled.TopContainer>
          <TextBanner
            heading="Znalazły dom"
            headingColor={theme.colors.gray[600]}
            subtitle="Zaopiekowani wybrańcy"
            tabletLayout="left"
            mobileLayout="left"
          >
            <Typography variant="bodyTitle" color={theme.colors.gray[500]}>
              Pozostajemy w stałym kontakcie z rodzinami, które zdecydowały się
              na adopcję. Pomagamy, doradzamy i z radością słuchamy szczęśliwych
              opowieści.
            </Typography>
          </TextBanner>
        </Styled.TopContainer>
        <Styled.Content>
          <Styled.Img src="../adoption/home-found.png" alt="" />
          <TextBanner
            heading="Do trzech razy sztuka"
            headingColor={theme.colors.gray[600]}
            tabletLayout="left"
            mobileLayout="left"
            size="small"
          >
            <Styled.TextContainer>
              <Typography variant="bodyTitle" color={theme.colors.gray[500]}>
                Pepe dwukrotnie wrócił z adopcji, za pierwszym razem niestety
                nie dogadał się z drugim zwierzakiem (fretką), a za drugim nie
                wiadomo. Schronisko poinformowało nas, że do nich trafił. Z
                opiekunką nie można było się w żaden sposób skontaktować.
              </Typography>
              <Typography variant="bodyTitle" color={theme.colors.gray[500]}>
                Do Pepe uśmiechnął się los i został zaadoptowany przez rodzinę z
                dzieckiem w Komornikach. Teraz śpi jak król w łóżku, w swoim
                kennelu na najbardziej miękkich kocach świata albo na jednym z
                chyba trzech legowisk w domu. Biega za piłeczką rzucaną przez
                ludzkiego brata, z którym jest nierozłączny! Ma też swoje
                rytuały - czytanie książki przez małego człowieka, jak i
                wieczorne dłuuugie mizianko przez Panią - to coś czego nie może
                zabraknąć na koniec dnia.
              </Typography>
            </Styled.TextContainer>
          </TextBanner>
        </Styled.Content>
      </Container>
    </Styled.Wrapper>
  )
}

export default HomeFound
