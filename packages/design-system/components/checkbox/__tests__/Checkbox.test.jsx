import { render, screen } from "design-system/test-utils"

import Checkbox from "design-system/components/checkbox"

const label = "Label"

describe(`Checkbox`, () => {
  it(`renders with default properties`, () => {
    render(<Checkbox label={label} />)
    expect(screen.getByText(label)).toBeInTheDocument()
    expect(screen.getByRole("checkbox")).toBeInTheDocument()
    expect(screen.getByRole("checkbox")).toBeEnabled()
  })

  it(`renders with custom properties`, () => {
    render(<Checkbox label={label} state="error" />)
    expect(screen.getByRole("checkbox")).toBeInTheDocument()
  })

  it(`renders disabled when disabled attribute passed`, () => {
    render(<Checkbox label={label} disabled />)
    expect(screen.getByRole("checkbox")).toBeDisabled()
  })

  it("displays error message when state is 'error' and checkbox is not checked", () => {
    render(<Checkbox label="Test Checkbox" state="error" />)
    const errorMessage = screen.getByText("Zaznacz zgodę.")

    expect(errorMessage).toBeInTheDocument()
  })
})
