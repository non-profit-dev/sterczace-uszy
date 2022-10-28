import userEvent from "@testing-library/user-event"

import { render, screen, act } from "../../../test-utils"

import Card from "../Card"

const text = "Lorem ipsum"
const title = () => <div>{text}</div>
const ChildComponent = () => <div>{text}</div>

describe(`Card`, () => {
  it(`renders with default properties`, () => {
    render(
      <Card title={title}>
        <ChildComponent />
      </Card>
    )
    expect(screen.getByText(text)).toBeInTheDocument()
  })
})
