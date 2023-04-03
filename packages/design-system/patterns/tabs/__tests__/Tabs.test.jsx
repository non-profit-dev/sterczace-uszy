import userEvent from "@testing-library/user-event"

import { render, screen } from "design-system/test-utils"

import Tabs from "design-system/patterns/tabs"

const id = "Test tabs"
export const data = [
  {
    tab: `Tab 1`,
    content: `Content 1`,
  },
  {
    tab: `Tab 2`,
    content: `Content 2`,
  },
  {
    tab: `Tab 3`,
    content: `Content 3`,
  },
]

describe(`Tabs`, () => {
  it(`renders with data provided`, () => {
    render(<Tabs id={id} data={data} />)

    expect(screen.getByRole("tablist")).toBeInTheDocument()

    for (let i = 0; i < data.length; i += 1) {
      expect(screen.getAllByRole("tab")[0]).toHaveTextContent(data[0].tab)
    }
  })

  it(`renders first tab element as the active one`, () => {
    render(<Tabs id={id} data={data} />)

    const { tab, content } = data[0]

    expect(screen.getByRole("tab", { selected: true })).toHaveTextContent(tab)
    expect(screen.getByRole("tabpanel", { hidden: false })).toHaveTextContent(
      content
    )
  })

  it(`selects another tab as the active one on click`, async () => {
    const user = userEvent.setup()

    render(<Tabs id={id} data={data} />)

    const tab = screen.getAllByRole("tab", { selected: false })[0]

    await user.click(tab)

    expect(tab).toHaveAttribute("aria-selected", "true")
    expect(screen.getByRole("tabpanel", {})).toBeVisible()
  })
})
