import { render, screen } from "design-system/test-utils"

import Accordion from "design-system/components/accordion"

const text = "Accordion Title"
const iconName = "arrowUp"
const children = <p>Test1</p>

describe(`Accordion`, () => {
  it(`renders with default properties`, () => {
    render(<Accordion text={text} />)
    expect(screen.getByText(text)).toBeInTheDocument()
  })
  it(`renders with custom properties`, () => {
    render(<Accordion variant="h5" as="div" />)
  })
  it(`renders with the icon when a correct icon name provided`, () => {
    render(<Accordion name={iconName} />)
    expect(screen.getByTitle(iconName)).toBeInTheDocument()
  })
  it(`renders with children default properties`, () => {
    render(<Accordion>{children}</Accordion>)
  })
})
