import { shape, arrayOf, string } from "prop-types"

import Typography from "design-system/components/typography"
import Image from "design-system/components/image"

import * as Styled from "./Animals.styled"

const Animals = ({ data }) => (
  <div>
    <Typography variant="h3" as="h2">
      Do adopcji:
    </Typography>
    <Styled.Grid>
      {data.map((animal) => (
        <div key={animal.name}>
          <Image src={animal.thumbnail.url} />
          <Typography variant="bodyTitle">{animal.name}</Typography>
          <Typography variant="bodySmall">{animal.excerpt}</Typography>
        </div>
      ))}
    </Styled.Grid>
  </div>
)

Animals.propTypes = {
  data: arrayOf(
    shape({
      name: string,
      description: string,
      url: string,
    })
  ).isRequired,
}

export default Animals
