import { shape, arrayOf, string } from "prop-types"

import Typography from "design-system/components/typography"
import Image from "design-system/components/image"

import Page from "../Page"

import * as Styled from "./HomePage.styled"

const HomePage = ({ animals, supporting }) => (
  <Page>
    <Styled.Main>
      <Styled.TextContainer>
        <Typography variant="h5">
          ♥️ {supporting.total} Pomocnych serc
        </Typography>
        <Typography variant="h5">
          🏡 {animals.total} Znalezionych domów
        </Typography>
      </Styled.TextContainer>

      <Typography variant="h4">Do adopcji:</Typography>
      <Styled.Grid>
        {animals.items.map((animal) => (
          <div key={animal.name}>
            <Image
              src={animal.thumbnail.url}
              alt=""
              width={animal.thumbnail.width}
              height={animal.thumbnail.height}
            />
            <Typography variant="bodyTitle">{animal.name}</Typography>
            <Typography variant="bodySmall">{animal.excerpt}</Typography>
          </div>
        ))}
      </Styled.Grid>
      <Typography variant="h4">Wspierajacy fundację:</Typography>
      <Styled.Grid>
        {supporting.items.map((item) => (
          <div key={item.name}>
            <Typography variant="bodyTitle">{item.name}</Typography>
            <Typography variant="bodyTiny">{item.description}</Typography>
          </div>
        ))}
      </Styled.Grid>
    </Styled.Main>
  </Page>
)

HomePage.propTypes = {
  animals: arrayOf(
    shape({
      name: string,
      gender: string,
      age: string,
    })
  ).isRequired,
  supporting: arrayOf(
    shape({
      name: string,
      description: string,
      url: string,
    })
  ).isRequired,
}

export default HomePage
