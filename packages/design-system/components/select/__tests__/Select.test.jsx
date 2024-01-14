import { render, screen } from "design-system/test-utils"
import userEvent from "@testing-library/user-event"

import Select from "design-system/components/select"

const label = "Label"
const defaultOption = "Default option text"

describe(`Select`, () => {
  it(`renders with default properties`, () => {
    render(<Select label={label} options={["test1", "test2", "test3"]} />)
    expect(screen.getByText(label)).toBeVisible()
    expect(screen.getByRole("combobox")).toBeVisible()
    expect(screen.getByRole("combobox")).toBeEnabled()
  })

  it(`renders with custom properties`, () => {
    render(
      <Select
        label={label}
        options={[defaultOption, "test1", "test2", "test3"]}
        defaultValue={defaultOption}
      />
    )
    expect(screen.getByRole("combobox")).toBeVisible()
    expect(screen.getByText(defaultOption)).toBeVisible()
  })

  it(`renders disabled when disabled attribute passed`, () => {
    render(
      <Select label={label} options={["test1", "test2", "test3"]} disabled />
    )
    expect(screen.getByRole("combobox")).toBeDisabled()
  })

  it(`renders with first option selected`, () => {
    render(<Select label={label} options={["test1", "test2", "test3"]} />)

    expect(screen.getByRole("option", { name: "test1" }).selected).toBe(true)
    expect(screen.getByRole("option", { name: "test2" }).selected).toBe(false)
    expect(screen.getByRole("option", { name: "test3" }).selected).toBe(false)
  })

  it(`changes selected value to chosen option`, async () => {
    const user = userEvent.setup()

    render(<Select label={label} options={["test1", "test2", "test3"]} />)

    await user.selectOptions(screen.getByRole("combobox"), "test3")

    expect(screen.getByRole("option", { name: "test3" }).selected).toBe(true)
    expect(screen.getByRole("option", { name: "test1" }).selected).toBe(false)
    expect(screen.getByRole("option", { name: "test2" }).selected).toBe(false)
  })
})
