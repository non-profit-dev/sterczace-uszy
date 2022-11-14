import { render, screen } from "../../../test-utils"

import Illustration from "../Illustration"

const name = "heartWithDogFace"

describe(`Illustration`, () => {
  it(`renders illustration when a correct name provided`, () => {
    render(<Illustration name={name} />)

    expect(screen.getByTitle(name)).toBeInTheDocument()
  })
})
