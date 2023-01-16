import { render, screen } from "design-system/test-utils"

import Accordion from "design-system/components/accordion"

const text = "Lorem ipsum"

describe(`Badge`, () => {
  it(`renders with default properties`, () => {
    render(<Accordion text={text} />)

    expect(screen.getByText(text)).toBeInTheDocument()
  })
})
