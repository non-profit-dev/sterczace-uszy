import { render, screen } from "design-system/test-utils"

import CtaBanner from "design-system/patterns/ctaBanner"

const heading = "Lorem ipsum"
const button = "Button"
const href = "https://example.com"

describe(`CtaBanner`, () => {
  it(`renders with default properties`, () => {
    render(
      <CtaBanner heading={heading} buttonText={button} buttonHref={href} />
    )

    expect(screen.getByText(heading)).toBeInTheDocument()
    expect(screen.getByText(button)).toBeInTheDocument()
    expect(screen.getByRole(`link`)).toHaveAttribute(`href`, href)
  })
})
