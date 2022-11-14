import { render, screen } from "design-system/test-utils"

import Icon from "design-system/components/icon"

const name = "heart"

describe(`Icon`, () => {
  it(`renders component when a correct icon name provided`, () => {
    render(<Icon name={name} />)

    expect(screen.getByTitle(name)).toBeInTheDocument()
  })
})
