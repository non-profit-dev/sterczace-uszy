import userEvent from "@testing-library/user-event"

import { render, screen, act } from "../../../test-utils"

import Button from "../Button"

const text = "Text"
const MockIcon = <span>icon</span>

describe(`Button`, () => {
  it(`renders with default properties`, () => {
    render(<Button text={text} />)
    expect(screen.getByText(text)).toBeInTheDocument()
  })

  it(`renders with link element if href is provided`, () => {
    render(<Button text={text} href="/" />)
    expect(screen.getByRole("link")).toBeInTheDocument()
  })

  it(`renders with button element if href is not provided`, () => {
    render(<Button text={text} />)
    expect(screen.getByRole("button")).toBeInTheDocument()
  })

  it(`renders the correct link href`, () => {
    // Arrange
    const href = "https://google.com"

    // Act
    render(<Button text={text} href={href} />)

    // Assert
    expect(screen.getByRole(`link`)).toHaveAttribute(`href`, href)
  })

  it(`renders with the start icon`, () => {
    render(<Button text={text} iconStart={MockIcon} />)
  })

  it(`renders with the end icon`, () => {
    render(<Button text={text} iconEnd={MockIcon} />)
  })

  it(`fires onClick callback when clicked`, () => {
    const onClickMock = jest.fn()

    render(<Button text={text} onClick={onClickMock} />)

    const button = screen.getByTestId("button")

    act(() => {
      userEvent.click(button)
    })

    expect(onClickMock).toBeCalledTimes(1)
  })
})
