import { render, screen } from "design-system/test-utils"

import Count from "design-system/components/count"

const countNumber = 3

describe(`Count`, () => {
  it(`renders with default properties and number provided as number`, () => {
    render(<Count count={countNumber} />)

    expect(screen.getByText(countNumber)).toBeInTheDocument()
  })

  it(`renders with custom properties`, () => {
    render(<Count count={countNumber} size="medium" />)

    expect(screen.getByText(countNumber)).toBeInTheDocument()
  })
})
