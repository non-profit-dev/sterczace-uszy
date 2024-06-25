import { render, screen } from "design-system/test-utils"

import Modal from "design-system/patterns/modal"

describe(`Modal`, () => {
  it(`renders with default properties`, () => {
    render(<Modal>test</Modal>)
    expect(screen.getByText(test)).toBeInTheDocument()
  })
})
