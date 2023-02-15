import { render, screen } from "design-system/test-utils"

import ListItem from "design-system/components/listItem"

const text = "Lorem ipsum"
const ChildComponent = () => <div>{text}</div>
const iconName = "check"

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

  it(`renders the list item element with the icon when a correct icon name provided`, () => {
    render(
      <ListItem variant="primary" iconName={iconName}>
        <ChildComponent />
      </ListItem>
    )

    expect(screen.getByTitle(iconName)).toBeInTheDocument()
  })
})
