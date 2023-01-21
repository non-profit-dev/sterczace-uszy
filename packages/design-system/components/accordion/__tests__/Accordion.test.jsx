import { render, screen } from "design-system/test-utils"

import Accordion from "design-system/components/accordion"

const text = "Lorem ipsum"
const children = <p>Test1</p>

describe(`Accordion`, () => {
  it(`renders with default properties`, () => {
    render(<Accordion text={text} />)
    expect(screen.getByText(text)).toBeInTheDocument()
  })
  it(`renders with default properties`, () => {
    render(<Accordion>{children}</Accordion>)
  })
})
