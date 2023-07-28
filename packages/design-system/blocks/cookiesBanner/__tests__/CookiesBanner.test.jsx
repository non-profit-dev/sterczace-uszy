import { render, screen } from "design-system/test-utils"

import CookiesBanner from "design-system/blocks/cookiesBanner"

describe(`CookiesBanner `, () => {
  it.skip(`renders with default properties`, () => {
    render(<CookiesBanner />)
    expect(screen.getByText(test)).toBeInTheDocument()
  })
})
