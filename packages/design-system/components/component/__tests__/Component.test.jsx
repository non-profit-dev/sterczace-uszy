// userEvent library simulates user interactions by dispatching the events that would happen if the interaction took place in a browser.
import userEvent from "@testing-library/user-event"

// import react-testing methods (wrapped with custom ThemeProvider added in the test-utils.jsx file)
import { render, screen, act } from "../../../test-utils"

import Component from "../Component"

const heading = "Heading"
const description = "Description"
const MockIcon = () => <span>icon</span>

// Group tests
describe(`Component`, () => {
  it(`renders with default properties`, () => {
    // Render a React element into the DOM
    render(<Component heading={heading} description={description} />)

    expect(screen.getByText(heading)).toBeInTheDocument()
    expect(screen.getByText(description)).toBeInTheDocument()
  })

  it(`renders the link subcomponent`, () => {
    render(
      <Component
        heading={heading}
        description={description}
        link={{ text: "Link text", href: "/" }}
      />
    )
  })

  it(`renders the correct link href`, () => {
    // Arrange
    const href = "https//:google.com"

    // Act
    render(
      <Component
        heading={heading}
        description={description}
        link={{ text: "Link text", href }}
      />
    )

    // Assert
    expect(screen.getByRole(`link`)).toHaveAttribute(`href`, href)
  })

  it(`renders the button with icon`, () => {
    render(
      <Component
        heading={heading}
        description={description}
        button={{ icon: <MockIcon />, onClick: jest.fn() }}
      />
    )
  })

  it(`fires button onClick callback when clicked`, () => {
    const onClickMock = jest.fn()

    render(
      <Component
        heading={heading}
        description={description}
        button={{ icon: <MockIcon />, onClick: onClickMock }}
      />
    )

    const button = screen.getByRole(`button`)

    act(() => {
      userEvent.click(button)
    })

    expect(onClickMock).toBeCalledTimes(1)
  })
})
