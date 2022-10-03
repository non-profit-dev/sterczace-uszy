import { render, screen } from "../../../test-utils"

import Badge from "../Badge"

const text = "Lorem ipsum"

describe(`Badge`, () => {
  it(`renders with default properties`, () => {
    render(<Badge text={text} />)

    expect(screen.getByText(text)).toBeInTheDocument()
  })

  it(`renders with custom properties`, () => {
    render(<Badge text={text} variant="neutrals" size="small" />)
  })
})
