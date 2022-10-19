import { render, screen } from "../../../test-utils"

import Ilustration from "../Ilustration"

const name = "heartWithDogFace"

describe(`Ilustration`, () => {
  it(`renders illustration when a correct name provided`, () => {
    render(<Ilustration name={name} />)

    expect(screen.getByTitle(name)).toBeInTheDocument()
  })
})
