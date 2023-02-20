import { render, screen } from "design-system/test-utils"

import Accordion from "design-system/components/accordion"

const heading = "Accordion Title"
const children = <p>Test1</p>

describe(`Accordion`, () => {
  it(`renders with default properties`, () => {
    render(<Accordion heading={heading}>{children}</Accordion>)
    expect(screen.getByText(heading)).toBeInTheDocument()
  })

  it(`renders with children default properties`, () => {
    render(<Accordion>{children}</Accordion>)
  })
})
