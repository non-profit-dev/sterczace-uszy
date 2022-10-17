import { render, screen, } from "../../../test-utils"

import Banner from "../Banner"

const heading = "heading"

describe(Banner, () => {
  it(renders heading with default properties, () => {
    render(<Banner heading={heading} />)
    expect(screen.getByText(heading)).toBeInTheDocument()
  })

})
