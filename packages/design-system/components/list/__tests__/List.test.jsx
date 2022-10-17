import { render, screen } from "../../../test-utils"

import List from "../List"

const children = <li>Test1</li>

describe(`List`, () => {
  it(`renders with default properties`, () => {
    render(<List>{children}</List>)
  })

  it(`renders multiple list items when passed`, () => {
    render(
      <List>
        <>
          <li>Lista element 1</li>
          <li>Lista element 2</li>
          <li>Lista element 3</li>
        </>
      </List>
    )

    const listItemsElements = screen.getAllByRole("listitem")
    expect(listItemsElements).toHaveLength(3)
  })
})
