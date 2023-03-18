import { render, screen } from "design-system/test-utils"

import DecorativeCard from "design-system/patterns/decorativeCard"

const text = "Sterczące uszy"
const illustrationName = "home"
const number = 32

describe(`DecorativeCard`, () => {
  it(`renders with provided count number`, () => {
    render(<DecorativeCard count={number} />)
    expect(screen.getByText("32")).toBeInTheDocument()
  })

  it(`renders with custom properties `, () => {
    render(
      <DecorativeCard
        title={text}
        count={number}
        illustrationName={illustrationName}
      />
    )
    expect(screen.getByText(text)).toBeInTheDocument()
  })
})
