import { render, screen } from "design-system/test-utils"

import Title from "design-system/components/title"

const text = "Example title"
const icon = "download"
const count = 3

describe(`Title`, () => {
  it(`renders with default properties`, () => {
    render(<Title text={text} />)

    expect(screen.getByText(text)).toBeInTheDocument()
  })

  it(`renders the iconStart based on a proper name prop provided`, () => {
    render(<Title text={text} iconStart={icon} />)

    expect(screen.getByTitle(icon)).toBeInTheDocument()
  })

  it(`renders the iconEnd based on a proper name prop provided`, () => {
    render(<Title text={text} iconEnd={icon} />)

    expect(screen.getByTitle(icon)).toBeInTheDocument()
  })
  it(`renders the count based on a proper number string prop provided`, () => {
    render(<Title text={text} count={count} />)

    expect(screen.getByText(count)).toBeInTheDocument()
  })
})
