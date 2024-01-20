import { render, screen } from "design-system/test-utils"

import Hero from "design-system/patterns/hero"

describe(`Hero`, () => {
  it(`renders with default properties`, () => {
    render(<Hero>test</Hero>)
    expect(screen.getByText(test)).toBeInTheDocument()
  })
})
