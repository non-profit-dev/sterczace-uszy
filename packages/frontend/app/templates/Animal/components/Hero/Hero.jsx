import { string } from "prop-types"

import Button from "design-system/components/button"
import Typography from "design-system/components/typography"
import Container from "design-system/components/container"

import TextBanner from "design-system/patterns/textBanner"

import * as Styled from "./Hero.styled"

const Hero = ({ name }) => (
  <Container size="large" as="header">
    <Styled.Content>
      <Styled.Breadcrumbs>
        <Button variant="text" text="Strona główna" size="small" href="/" />
        /
        <Button
          variant="text"
          text="Nasi podopieczni"
          size="small"
          href="/do-adopcji"
        />
        / <Button variant="text" text={name} />
      </Styled.Breadcrumbs>
      <TextBanner
        heading={name}
        subtitle="Przytul i pokochaj"
        size="large"
        tabletLayout="left"
        mobileLayout="left"
      >
        <Typography variant="bodyTitle">
          Chcesz mieć oddanego kompana na resztę życia? Daj dom, zyskaj miłość i
          dozgonną wdzięczność.
        </Typography>
        <Typography variant="bodyTitle">
          Jak przebiega adopcja? Dowiedz się więcej <a href="/adopcja">tutaj</a>
          .
        </Typography>
      </TextBanner>
    </Styled.Content>
  </Container>
)

Hero.propTypes = {
  name: string.isRequired,
}

export default Hero
