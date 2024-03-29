import { render, screen, fireEvent } from "design-system/test-utils"

import Checkbox from "design-system/components/checkbox"

const label = "Label"

describe(`Checkbox`, () => {
  it(`renders with default properties`, () => {
    render(<Checkbox label={label} />)
    expect(screen.getByText(label)).toBeInTheDocument()
    expect(screen.getByRole("checkbox")).toBeInTheDocument()
    expect(screen.getByRole("checkbox")).toBeEnabled()
  })

  it(`renders disabled when disabled attribute passed`, () => {
    render(<Checkbox label={label} disabled />)
    expect(screen.getByRole("checkbox")).toBeDisabled()
  })

  it("displays error message when state is 'error'", () => {
    render(<Checkbox label={label} error />)
    const errorMessage = screen.getByText("Zaznacz zgodę.")
    expect(errorMessage).toBeInTheDocument()
  })

  it("toggles the checked state when clicked", () => {
    render(<Checkbox label={label} />)
    const checkbox = screen.getByRole("checkbox")
    fireEvent.click(checkbox)
    expect(checkbox.checked).toBe(true)
    fireEvent.click(checkbox)
    expect(checkbox.checked).toBe(false)
  })
})
