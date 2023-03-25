import { useTheme } from "@emotion/react"

import Typography from "design-system/components/typography"

import * as Styled from "./AboutUs.styled"

const AboutUs = () => {
  const theme = useTheme()

  return (
    <Styled.ContainerSection as="section">
      <Styled.Wrapper>
        <Styled.Banner
          heading="Fundacja Sterczące Uszy"
          subtitle="Więcej o nas"
          descriptionColor={theme.colors.gray[600]}
          size="medium"
        />
        <Styled.TextWrapper>
          <Typography variant="bodyTitle">
            Poznajcie <strong>Fundację Sterczące Uszy</strong> - organizację,
            którą założyły <strong>dwie kobiety z pasji i miłości</strong> do
            czworonogów 14 kwietnia 2022 roku.
          </Typography>
          <Typography variant="bodyTitle">
            Nasza historia zaczęła się w innej organizacji pomagającej
            zwierzętom. Poznałyśmy się szukając dla nich nowych domów oraz
            tymczvariantowo przyjmując ich pod naszym dachem.
          </Typography>
          <Typography variant="bodyTitle">
            Wspólna chęć działania i <strong>wspólne wartości</strong>, jakimi
            się kierujemy na rzecz zwierząt, zmotywowała nas do założenia naszej
            oficjalnej fundacji.
          </Typography>
          <Typography variant="bodyTitle">
            Obecnie, nie posiadając schroniska ani przytuliska zapewniamy
            bezpośrednią opiekę lub miejsce zwierząt w domach tymczasowych, a
            następnie aktywnie poszukujemy dla nich rodzin adopcyjnych.
          </Typography>
          <Typography variant="bodyTitle">
            Działamy dzięki wpłatom i pomocy ludzi, dla których dobro zwierząt
            ma znaczenie. Mamy ambitne plany na przyszłość, chcemy poszerzyć
            zakres naszych działań i{" "}
            <strong>
              pomóc jeszcze większej ilości potrzebujących zwierząt.
            </strong>
          </Typography>
          <Typography variant="bodyTitle">
            Fundacja Sterczące Uszy to historia o kobietach, które nie poddają
            się i podejmują działania dla dobra zwierząt, niezależnie od
            przeciwności losu.
          </Typography>
        </Styled.TextWrapper>
        <Styled.Img
          alt="dog with heart"
          src="../about/aboutus-section-image.png"
        />
      </Styled.Wrapper>
    </Styled.ContainerSection>
  )
}

export default AboutUs
