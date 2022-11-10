import { render, screen } from "design-system/test-utils"

import { Title } from "design-system/components/title"

const text = "Example title"
const badge = "Example badge"
const icon = "download"

describe(`Title`, () => {
  it(`renders with default properties`, () => {
    render(<Title text={text} />)

    expect(screen.getByText(text)).toBeInTheDocument()
  })

  it(`renders the badge component`, () => {
    render(<Title text={text} badge={badge} />)

    expect(screen.getByText(badge)).toBeInTheDocument()
  })

  it(`renders the iconStart based on a proper name prop provided`, () => {
    render(<Title text={text} badge={badge} iconStart={icon} />)

    expect(screen.getByTitle(icon)).toBeInTheDocument()
  })

  it(`renders the iconEnd based on a proper name prop provided`, () => {
    render(<Title text={text} badge={badge} iconEnd={icon} />)

    expect(screen.getByTitle(icon)).toBeInTheDocument()
  })
})
