import { render, screen } from "../../../test-utils"

import ListItem from "../ListItem"

const text = "Lorem ipsum"
const ChildComponent = () => <div>{text}</div>
const MockIcon = <div data-testid="svg-icon">icon</div>

describe(`ListItem`, () => {
  it(`renders with default properties`, () => {
    render(
      <ListItem>
        <ChildComponent />
      </ListItem>
    )

    expect(screen.getByText(text)).toBeInTheDocument()
  })
  it(`renders with custom properties`, () => {
    render(
      <ListItem variant="gray">
        <ChildComponent />
      </ListItem>
    )

    expect(screen.getByText(text)).toBeInTheDocument()
  })

  it(`renders the list item element with icon`, () => {
    render(
      <ListItem variant="primary" icon={MockIcon}>
        <ChildComponent />
      </ListItem>
    )

    expect(screen.getByTestId("svg-icon")).toBeInTheDocument()
  })
})
