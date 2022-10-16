import { render, screen } from "../../../test-utils"

import Typography from "../Typography"

const text = "Lorem ipsum"

describe(`Typography`, () => {
  it("should render with h1 tag", () => {
    render(
      <Typography color="primary" variant="h1">
        {text}
      </Typography>
    )

    const typography = screen.getByRole(`heading`, { level: 1 })
    expect(typography).toHaveTextContent(text)
  })
  it("should render h1 variant with h4 tag", () => {
    render(
      <Typography variant="h1" as="h4">
        {text}
      </Typography>
    )

    const typography = screen.getByRole(`heading`, { level: 4 })
    expect(typography).toHaveTextContent(text)
  })
})
