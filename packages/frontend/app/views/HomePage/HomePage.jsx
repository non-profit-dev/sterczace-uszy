import { shape, arrayOf, string } from "prop-types"

import Typography from "design-system/components/typography"
import Page from "../Page"

import * as Styled from "./HomePage.styled"

const HomePage = ({ animals, supporting }) => (
  <Page>
    <Styled.Main>
      <Typography variant="h4">Zwierzęta fundacji:</Typography>
      {animals.map((animal) => (
        <p key={animal.name}>{animal.name}</p>
      ))}

      <Typography variant="h4">Wspierajacy fundację:</Typography>
      {supporting.map((support) => (
        <p key={support.name}>{support.name}</p>
      ))}
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
