import userEvent from "@testing-library/user-event"
import { render, screen } from "design-system/test-utils"

import IconButton from "design-system/components/iconButton"

const iconName = "facebook"
const iconSize = "large"
const iconColor = "red"
const href = "https://google.com"
const ariaLabel = "Visit our facebook site"

describe(`IconButton`, () => {
  it(`renders with default properties`, () => {
    render(<IconButton name={iconName} ariaLabel={ariaLabel} />)

    expect(screen.getByTitle(iconName)).toBeInTheDocument()
  })

  it(`renders with custom properties`, () => {
    render(
      <IconButton
        name={iconName}
        size={iconSize}
        color={iconColor}
        ariaLabel={ariaLabel}
      />
    )

    expect(screen.getByTitle(iconName)).toBeInTheDocument()
  })

  it(`renders as link element if correct link href is provided`, () => {
    render(<IconButton name={iconName} href={href} ariaLabel={ariaLabel} />)

    expect(screen.getByRole(`link`)).toHaveAttribute(`href`, href)
  })

  it(`renders as button element if href is not provided`, () => {
    render(<IconButton name={iconName} ariaLabel={ariaLabel} />)

    expect(screen.getByRole("button")).toBeInTheDocument()
  })

  it(`fires onClick callback when button is clicked`, async () => {
    const user = userEvent.setup()
    const onClickMock = jest.fn()
    render(
      <IconButton name={iconName} onClick={onClickMock} ariaLabel={ariaLabel} />
    )

    const button = screen.getByRole("button")

    await user.click(button)

    expect(onClickMock).toBeCalledTimes(1)
  })

  it(`fires onClick callback when link is clicked`, async () => {
    const user = userEvent.setup()
    const onClickMock = jest.fn()
    render(
      <IconButton
        name={iconName}
        href={href}
        onClick={onClickMock}
        ariaLabel={ariaLabel}
      />
    )

    const link = screen.getByRole("link")

    await user.click(link)

    expect(onClickMock).toBeCalledTimes(1)
  })
})
