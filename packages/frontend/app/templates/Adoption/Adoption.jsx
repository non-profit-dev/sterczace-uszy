import Container from "design-system/components/container"
import Banner from "design-system/components/banner"
import Button from "design-system/components/button"
import Typography from "design-system/components/typography"
import CtaBanner from "design-system/patterns/ctaBanner"
import Navigation from "design-system/blocks/navigation"
import Footer from "design-system/blocks/footer"

import Page from "../Page"

import { animalsType } from "../../lib/types"

import * as Styled from "./Adoption.styled"

const Adoption = ({ animals }) => (
  <Page title="Nasi podopieczni">
    <Banner>
      <Banner
        heading="Nasi podopieczni czekają na Twoje wsparcie! Chcesz nam pomóc? Zajrzyj"
        button={
          <Button
            text="tutaj"
            href="/wsparcie"
            variant="textLine"
            size="small"
          />
        }
      />
    </Banner>

    <Navigation />

    <Styled.Main>
      <Container>
        <Typography variant="h4" as="h3">
          ♥️ {animals.total} Pomocnych serc
        </Typography>
      </Container>
      <CtaBanner
        buttonHref="/kontakt"
        buttonText="Skontaktuj się z nami"
        heading="Masz pytania lub wątpliwości?"
        mobileLayout="left"
      />
    </Styled.Main>

    <Footer />
  </Page>
)

Adoption.propTypes = {
  animals: animalsType.isRequired,
}

export default Adoption
