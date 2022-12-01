import { render, screen } from "design-system/test-utils"

import Count from "design-system/components/count"

const countString = "3"
const countNumber = 3

describe(`Count`, () => {
  it(`renders with default properties and number provided as string`, () => {
    render(<Count count={countString} />)

    expect(screen.getByText(countString)).toBeInTheDocument()
  })

  it(`renders with default properties and number provided as number`, () => {
    render(<Count count={countNumber} />)

    expect(screen.getByText(countNumber)).toBeInTheDocument()
  })

  it(`renders with custom properties`, () => {
    render(<Count count={countString} size="large" />)

    expect(screen.getByText(countString)).toBeInTheDocument()
  })
})
