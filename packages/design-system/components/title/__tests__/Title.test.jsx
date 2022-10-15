import { render, screen } from "../../../test-utils"

import Title from "../Title"

const text = "Example title"
const badge = "Example badge"

describe(`Title`, () => {
  it(`renders with default properties`, () => {
    render(<Title text={text} />)

    expect(screen.getByText(text)).toBeInTheDocument()
  })

  it(`renders the badge component`, () => {
    render(<Title text={text} badge={badge} />)

    expect(screen.getByText(badge)).toBeInTheDocument()
  })
})
