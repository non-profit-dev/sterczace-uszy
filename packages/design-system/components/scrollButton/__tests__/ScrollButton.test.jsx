import { render, screen } from "design-system/test-utils"

import ScrollButton from "design-system/components/scrollButton"

const ariaLabel = "Scroll to adoption section"
const sectionId = "adoption"

describe(`ScrollButton`, () => {
  it(`renders with default properties`, () => {
    render(<ScrollButton ariaLabel={ariaLabel} sectionId={sectionId} />)
    expect(screen.getByRole(`link`)).toBeInTheDocument()
  })

  it(`renders the correct link href`, () => {
    render(<ScrollButton ariaLabel={ariaLabel} sectionId={sectionId} />)

    expect(screen.getByRole("link", { ariaLabel })).toHaveAttribute(
      "href",
      `#${sectionId}`
    )
  })
})
