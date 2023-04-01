import Container from "design-system/components/container"
import Banner from "design-system/components/banner"
import Button from "design-system/components/button"
import Typography from "design-system/components/typography"
import Navigation from "design-system/blocks/navigation"
import Footer from "design-system/blocks/footer"

import Page from "../Page"

import * as Styled from "./Animal.styled"

// eslint-disable-next-line react/prop-types
const Animal = ({ data }) => (
  <Page title={`${data.name} - Nasi podopieczni`}>
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
        <Typography variant="h1">{data.name}</Typography>
        <Typography variant="pLarge">{data.excerpt}</Typography>
        <img src={data.thumbnail.url} alt="" width="400" />
      </Container>
    </Styled.Main>

    <Footer />
  </Page>
)

export default Animal
