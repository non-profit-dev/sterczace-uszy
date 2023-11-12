import Typography from "design-system/components/typography"
import globalData from "shared/data"

import * as Styled from "./AboutUs.styled"

const AboutUs = () => (
  <Styled.ContainerSection as="section" size="medium">
    <Styled.Wrapper>
      <Styled.Banner
        heading={`Fundacja ${globalData.organizationName}`}
        headingTag="h1"
        subtitle="Więcej o nas"
        size="medium"
        tabletLayout="left"
        mobileLayout="left"
      />
      <Styled.TextWrapper>
        <Typography variant="bodyTitle">
          Poznajcie <strong>Fundację {globalData.organizationName}</strong> -
          organizację, którą założyły{" "}
          <strong>dwie kobiety z pasji i miłości</strong> do czworonogów 14
          kwietnia 2022 roku.
        </Typography>
        <Typography variant="bodyTitle">
          Nasza historia zaczęła się w innej organizacji pomagającej zwierzętom.
          Poznałyśmy się szukając dla nich nowych domów oraz tymczasowo
          przyjmując ich pod naszym dachem.
        </Typography>
        <Typography variant="bodyTitle">
          Wspólna chęć działania zmotywowała nas do założenia naszej oficjalnej
          fundacji.
        </Typography>
        <Typography variant="bodyTitle">
          Obecnie Fundacja nie posiadając schroniska ani przytuliska zapewnia
          miejsce zwierząt w domach tymczasowych, a następnie aktywnie poszukuje
          dla nich rodzin.
        </Typography>
        <Typography variant="bodyTitle">
          Fundacja działa dzięki wpłatom i pomocy ludzi, dla których dobro
          zwierząt ma znaczenie. Zarząd Fundacji ma ambitne plany na przyszłość,
          chcemy poszerzyć zakres naszych działań i{" "}
          <strong>
            pomóc jeszcze większej ilości potrzebujących zwierząt.
          </strong>
        </Typography>
        <Typography variant="bodyTitle">
          Fundacja {globalData.organizationName} to historia o osobach, które
          nie poddają się i podejmują działania dla dobra zwierząt, niezależnie
          od przeciwności losu.
        </Typography>
      </Styled.TextWrapper>
      <Styled.Img
        alt="dog with heart"
        src="../about/aboutus-section-image.png"
      />
    </Styled.Wrapper>
  </Styled.ContainerSection>
)

export default AboutUs
