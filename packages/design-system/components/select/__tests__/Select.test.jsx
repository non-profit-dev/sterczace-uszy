import { render, screen } from "design-system/test-utils"

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
        options={["test1", "test2", "test3"]}
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
})
