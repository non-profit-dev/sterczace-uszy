import { render, screen } from "../../../test-utils"

import TextBanner from "../TextBanner"

const text = "Lorem ipsum"
const ChildComponent = () => <div>{text}</div>

describe(`TextBanner`, () => {
  it(`renders with custom properties`, () => {
    render(
      <TextBanner
        heading="Lorem ipsum"
        description="text"
        layout="left"
        size="tiny"
      >
        <ChildComponent />
      </TextBanner>
    )
    expect(screen.getByText(text)).toBeInTheDocument()
  })
})
