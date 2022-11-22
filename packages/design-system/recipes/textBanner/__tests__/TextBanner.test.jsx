import { render, screen } from "design-system/test-utils"

import TextBanner from "design-system/recipes/textBanner"

const heading = "Fundacja Sterczące Uszy"
const description = "Text"

describe(`TextBanner`, () => {
  it(`renders with custom properties`, () => {
    render(
      <TextBanner
        heading="Fundacja Sterczące Uszy"
        description="Text"
        layout="left"
        size="tiny"
      />
    )

    expect(screen.getByText(heading)).toBeInTheDocument()
    expect(screen.getByText(description)).toBeInTheDocument()
  })
  it(`renders with default properties`, () => {
    render(<TextBanner heading="Fundacja Sterczące Uszy" description="Text" />)

    expect(screen.getByText(heading)).toBeInTheDocument()
    expect(screen.getByText(description)).toBeInTheDocument()
  })
})
