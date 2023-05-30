import { render, screen } from "design-system/test-utils"

import PanelComponent from "design-system/patterns/panelComponent"

const content = "Test Heading"
const title = "Sample title"
const icon = "check"

describe(`Panel`, () => {
  it(`renders with default properties`, () => {
    render(<PanelComponent content={content} title={title} icon={icon} />)
    expect(screen.getByText(content)).toBeInTheDocument()
    expect(screen.getByText(title)).toBeInTheDocument()
    expect(screen.getByTitle(icon)).toBeInTheDocument()
  })
})
