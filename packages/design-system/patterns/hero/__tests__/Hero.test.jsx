import { render, screen } from "design-system/test-utils"

import Hero from "design-system/patterns/hero"

const data = {
  heading: "test",
  asset: "random-path.jpg",
}

describe(`Hero`, () => {
  it(`renders with default properties`, () => {
    render(<Hero heading={data.heading} />)
    expect(screen.getByText(data.heading)).toBeInTheDocument()
  })

  it(`renders asset when prop provided`, () => {
    render(<Hero heading="test" asset={data.asset} />)

    expect(screen.getByRole("img")).toHaveAttribute("src", data.asset)
  })
})
