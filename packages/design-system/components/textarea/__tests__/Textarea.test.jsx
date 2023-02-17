import userEvent from "@testing-library/user-event"

import { render, screen } from "design-system/test-utils"

import Textarea from "design-system/components/textarea"

const label = "Example label"
const requiredMessage = "Pole wymagane"
const message = "Test message"

describe(`Textarea`, () => {
  it(`renders with default properties`, () => {
    render(<Textarea label={label} />)
    expect(screen.getByText(label)).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toBeEnabled()
  })

  it(`renders with custom properties`, () => {
    render(
      <Textarea
        label={label}
        placeholder="Example placeholder text"
        state="error"
      />
    )
    expect(screen.getByRole("textbox")).toBeInTheDocument()
  })

  it(`has typed placeholder`, () => {
    render(
      <Textarea
        label={label}
        placeholder="Example placeholder text"
        state="error"
      />
    )

    const textarea = screen.getByPlaceholderText("Example placeholder text")
    expect(textarea).toHaveAttribute("placeholder", "Example placeholder text")
  })

  it(`renders disabled when disabled attribute passed`, () => {
    render(<Textarea label={label} disabled />)
    expect(screen.getByRole("textbox")).toBeDisabled()
  })

  it(`renders with message when is passed`, () => {
    render(<Textarea label={label} message={message} />)
    expect(screen.getByTestId("message")).toHaveTextContent(message)
  })

  it(`renders with hardcoded message when is required`, () => {
    render(<Textarea label={label} required />)
    expect(screen.getByTestId("message")).toHaveTextContent(requiredMessage)
  })

  it("has typed text", async () => {
    const user = userEvent.setup()

    render(<Textarea label={label} />)

    const input = screen.getByRole("textbox")

    await user.type(input, "Test")

    expect(input).toHaveValue("Test")
  })

  it("has error icon when state is error", async () => {
    render(<Textarea label={label} error />)

    const icon = screen.getByTitle("close")
    expect(icon).toBeVisible()
  })
})
