import { render, screen } from "design-system/test-utils"

import Accordion from "design-system/components/accordion"

const color = "activeColor"

describe(`Banner`, () => {
  it(`renders Button with default properties`, () => {
    render(<Accordion color={color} />)
    expect(screen.getByText(color)).toBeInTheDocument()
  })
})
