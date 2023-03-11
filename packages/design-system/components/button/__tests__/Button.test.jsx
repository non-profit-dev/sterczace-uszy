import userEvent from "@testing-library/user-event"

import { render, screen } from "design-system/test-utils"

import Button from "design-system/components/button"

const text = "Text"
const iconName = "download"
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

  it(`renders with the start icon when a correct icon name provided`, () => {
    render(<Button text={text} iconStart={iconName} />)
    expect(screen.getByTitle(iconName)).toBeInTheDocument()
  })

  it(`renders with the end icon when a correct icon name provided`, () => {
    render(<Button text={text} iconEnd={iconName} />)
    expect(screen.getByTitle(iconName)).toBeInTheDocument()
  })

  it(`fires onClick callback when button is clicked`, async () => {
    const user = userEvent.setup()
    const onClickMock = jest.fn()

    render(<Button text={text} onClick={onClickMock} />)

    const button = screen.getByRole("button")

    await user.click(button)

    expect(onClickMock).toBeCalledTimes(1)
  })

  it(`fires onClick callback when link is clicked`, async () => {
    const user = userEvent.setup()
    const onClickMock = jest.fn()

    render(<Button text={text} href="/" onClick={onClickMock} />)

    const link = screen.getByRole("link")

    await user.click(link)

    expect(onClickMock).toBeCalledTimes(1)
  })
})
