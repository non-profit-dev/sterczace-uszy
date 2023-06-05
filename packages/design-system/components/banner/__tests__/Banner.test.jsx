import { render, screen } from "design-system/test-utils"

import Banner from "design-system/components/banner"

const heading = "heading"

describe(`Banner`, () => {
  it(`renders Banner with default properties`, () => {
    render(<Banner>{heading}</Banner>)
    expect(screen.getByText(heading)).toBeInTheDocument()
  })
})
