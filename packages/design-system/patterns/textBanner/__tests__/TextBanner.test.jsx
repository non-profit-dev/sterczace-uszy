import { render, screen } from "design-system/test-utils"

import TextBanner from "design-system/patterns/textBanner"

const heading = "Fundacja Sterczące Uszy"
const children = "Text"

describe(`TextBanner`, () => {
  it(`renders with custom properties`, () => {
    render(
      <TextBanner heading="Fundacja Sterczące Uszy" layout="left" size="tiny">
        {children}
      </TextBanner>
    )

    expect(screen.getByText(heading)).toBeInTheDocument()
    expect(screen.getByText(children)).toBeInTheDocument()
  })
  it(`renders with default properties`, () => {
    render(
      <TextBanner heading="Fundacja Sterczące Uszy">{children}</TextBanner>
    )

    expect(screen.getByText(heading)).toBeInTheDocument()
    expect(screen.getByText(children)).toBeInTheDocument()
  })
})
