import { render, screen } from "design-system/test-utils"

import PanelComponent from "design-system/patterns/panelComponent"

const heading = "Test Heading"
const title = "Sample title"

describe(`PanelComponent`, () => {
  it(`renders with default properties`, () => {
    render(<PanelComponent heading={heading} title={title} />)
    expect(screen.getByText(heading)).toBeInTheDocument()
    expect(screen.getByText(title)).toBeInTheDocument()
  })
})
