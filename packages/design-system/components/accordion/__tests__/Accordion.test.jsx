import userEvent from "@testing-library/user-event"

import { render, screen } from "design-system/test-utils"

import Accordion from "design-system/components/accordion"

const heading = "Accordion Title"
const children = <p>Accordion Content</p>

describe(`Accordion`, () => {
  it(`renders with default properties`, () => {
    render(<Accordion heading={heading}>{children}</Accordion>)
    expect(screen.getByText(heading)).toBeInTheDocument()
  })

  it(`renders with hidden content by default`, () => {
    render(<Accordion heading={heading}>{children}</Accordion>)

    const button = screen.getByRole("button")

    expect(button).toHaveAttribute("aria-expanded", "false")
    expect(screen.queryByRole("region")).not.toBeInTheDocument()
  })

  it(`shows the content on click`, async () => {
    render(<Accordion heading={heading}>{children}</Accordion>)

    const user = userEvent.setup()
    const button = screen.getByRole("button")

    await user.click(button)

    expect(button).toHaveAttribute("aria-expanded", "true")
    expect(screen.getByRole("region")).toBeInTheDocument()
  })
})
