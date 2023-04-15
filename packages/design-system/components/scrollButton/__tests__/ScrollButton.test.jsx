import userEvent from "@testing-library/user-event"

import { render, screen } from "design-system/test-utils"

import ScrollButton from "design-system/components/scrollButton"

const ariaLabel = "Scroll to adoption section"
const sectionIdToScroll = "adoption"

describe(`ScrollButton`, () => {
  it(`renders with default properties`, () => {
    render(
      <ScrollButton
        ariaLabel={ariaLabel}
        sectionIdToScroll={sectionIdToScroll}
      />
    )
    expect(screen.getByRole(`link`)).toBeInTheDocument()
  })
  it(`fires onClick callback when scroll button is clicked`, async () => {
    const user = userEvent.setup()
    const onClickMock = jest.fn()
    render(
      <ScrollButton
        ariaLabel={ariaLabel}
        sectionIdToScroll={sectionIdToScroll}
      />
    )

    const link = screen.getByRole("link")

    await user.click(link)

    expect(onClickMock).toBeCalledTimes(1)
  })
})
