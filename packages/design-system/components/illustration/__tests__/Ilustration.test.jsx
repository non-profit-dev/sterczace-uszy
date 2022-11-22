import { render, screen } from "design-system/test-utils"

import Illustration from "design-system/components/illustration"

const name = "heartWithDogFace"

describe(`Illustration`, () => {
  it(`renders illustration when a correct name provided`, () => {
    render(<Illustration name={name} />)

    expect(screen.getByTitle(name)).toBeInTheDocument()
  })
})
