import { render, screen } from "design-system/test-utils"

import Banner from "design-system/components/banner"

const heading = "heading"
const button = "button"

describe(`Banner`, () => {
  it(`renders Banner with default properties`, () => {
    render(<Banner heading={heading} />)
    expect(screen.getByText(heading)).toBeInTheDocument()
  })
  it(`renders Button with default properties`, () => {
    render(<Banner button={button} heading={heading} />)
    expect(screen.getByText(button)).toBeInTheDocument()
  })
})
