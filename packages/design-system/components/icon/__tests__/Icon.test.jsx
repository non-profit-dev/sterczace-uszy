import { render, screen } from "../../../test-utils"

import Icon from "../Icon"

const name = "heart"

describe(`Icon`, () => {
  it(`renders component when a correct icon name provided`, () => {
    render(<Icon name={name} />)

    expect(screen.getByTitle(name)).toBeInTheDocument()
  })
})
