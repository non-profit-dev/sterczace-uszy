// userEvent library simulates user interactions by dispatching the events that would happen if the interaction took place in a browser.
import userEvent from "@testing-library/user-event"

// import react-testing methods (wrapped with custom ThemeProvider added in the test-utils.jsx file)
import { render, screen, act } from "../../../test-utils"

import Component from "../Component"

const heading = "Heading"
const description = "Description"
const HeartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
)

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
        button={{ icon: HeartIcon, onClick: jest.fn() }}
      />
    )
  })

  it(`fires button onClick callback when clicked`, () => {
    const onClickMock = jest.fn()

    render(
      <Component
        heading={heading}
        description={description}
        button={{ icon: HeartIcon, onClick: onClickMock }}
      />
    )

    const button = screen.getByRole(`button`)

    act(() => {
      userEvent.click(button)
    })

    expect(onClickMock).toBeCalledTimes(1)
  })
})
