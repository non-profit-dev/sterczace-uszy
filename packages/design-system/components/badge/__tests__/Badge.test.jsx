import { render, screen } from "design-system/test-utils"

import { Badge } from "design-system/components/badge"

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
