import userEvent from "@testing-library/user-event"

import { render, screen } from "design-system/test-utils"

import Input from "design-system/components/input"

const label = "Label"
const message = "Test message"

describe(`Input`, () => {
  it(`renders with default properties`, () => {
    render(<Input label={label} type="text" />)
    expect(screen.getByText(label)).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toBeEnabled()
  })

  it(`renders with custom properties`, () => {
    render(
      <Input
        label={label}
        type="text"
        placeholder="Example placeholder text"
        state="valid"
      />
    )
    expect(screen.getByRole("textbox")).toBeInTheDocument()
  })

  it(`renders disabled when disabled attribute passed`, () => {
    render(<Input label={label} type="text" disabled />)
    expect(screen.getByRole("textbox")).toBeDisabled()
  })

  it(`renders with message when is passed`, () => {
    render(<Input label={label} type="text" message={message} />)
    expect(screen.getByTestId("message")).toHaveTextContent(message)
  })

  it("has typed text", async () => {
    const user = userEvent.setup()

    render(<Input label={label} type="text" />)

    const input = screen.getByRole("textbox")

    await user.type(input, "Test")

    expect(input).toHaveValue("Test")
  })

  it("should not allow letters to be typed when type is set to number", async () => {
    const user = userEvent.setup()

    render(<Input label={label} type="number" />)

    const input = screen.getByRole("spinbutton")

    await user.type(input, "Test")

    expect(input).toHaveValue(null)
  })
})
