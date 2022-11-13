import { render, screen } from "../../../test-utils"

import TextBanner from "../TextBanner"

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
