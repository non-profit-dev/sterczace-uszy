import { render, screen } from "design-system/test-utils"

import ErrorMessage from "design-system/components/errorMessage"

const errorMessage = "Test error message"

describe(`ErrorMessage`, () => {
  it(`renders with errorMessage if provided`, () => {
    render(<ErrorMessage errorMessage={errorMessage} />)
    expect(screen.getByText(errorMessage)).toBeInTheDocument()
    expect(screen.getByText(errorMessage)).toBeVisible()
  })
})
