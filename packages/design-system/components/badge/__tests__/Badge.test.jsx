import userEvent from "@testing-library/user-event"
import { render, screen, act } from "../../../test-utils"

import Badge from "../Badge"

const text = "Lorem ipsum"

describe(`Badge`, () => {
  it(`renders with default properties`, () => {
    render(<Badge text={text} variant="neutrals" size="small" />)

    expect(screen.getByText(text)).toBeInTheDocument()
  })
})
