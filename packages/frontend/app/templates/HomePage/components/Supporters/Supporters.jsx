import { shape, arrayOf, string } from "prop-types"

import Typography from "design-system/components/typography"

import * as Styled from "./Supporters.styled"

const Supporters = ({ data }) => (
  <div>
    <Typography variant="h3" as="h2">
      Dziękujemy za wsparcie
    </Typography>
    <Styled.Grid>
      {data.map((item) => (
        <div key={item.name}>
          <Typography variant="bodyTitle">{item.name}</Typography>
          <Typography variant="bodyTiny">{item.description}</Typography>
        </div>
      ))}
    </Styled.Grid>
  </div>
)

Supporters.propTypes = {
  data: arrayOf(
    shape({
      name: string,
      description: string,
      url: string,
    })
  ).isRequired,
}

export default Supporters
