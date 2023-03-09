import { render, screen } from "design-system/test-utils"

import Feature from "design-system/patterns/feature"

const heading = "Feature"
const description = "Lorem ipsum"
const icon = "check"

describe(`Feature`, () => {
  it(`renders with default properties`, () => {
    render(<Feature heading={heading} description={description} icon={icon} />)

    expect(screen.getByText(heading)).toBeInTheDocument()
    expect(screen.getByTitle(icon)).toBeInTheDocument()
    expect(screen.getByText(description)).toBeInTheDocument()
  })
})
