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
        <Button variant="textLine" text="Strona główna" size="small" href="/" />
        /
        <Button
          variant="textLine"
          text="Nasi podopieczni"
          size="small"
          href="/do-adopcji"
        />
        / <Button variant="textLine" text={name} />
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
          Jak przebiega adopcja? Dowiedz się więcej{" "}
          <Button variant="textLine" text="tutaj" />.
        </Typography>
      </TextBanner>
    </Styled.Content>
  </Container>
)

Hero.propTypes = {
  name: string.isRequired,
}

export default Hero
