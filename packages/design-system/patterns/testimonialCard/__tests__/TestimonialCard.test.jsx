import { render, screen } from "design-system/test-utils"

import TestimonialCard from "design-system/patterns/testimonialCard"

describe(`TestimonialCard`, () => {
  it(`renders with required properties`, () => {
    render(
      <TestimonialCard
        title="Example title"
        excerpt="Description"
        author="Example author"
        authorDetails="Author details"
      />
    )
    expect(screen.getByText("Example title")).toBeInTheDocument()
  })
})
