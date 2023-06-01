import { render, screen } from "design-system/test-utils"
import Panel from "design-system/patterns/panel"

const iconName = "copy"
const children = "Test Children"
const title = "Sample title"
const accountNumber = "1234"

describe(`Panel`, () => {
  it(`renders with default properties`, () => {
    render(<Panel title={title}>{children}</Panel>)
    expect(screen.getByText(title)).toBeInTheDocument()
    expect(screen.getByText(children)).toBeInTheDocument()
  })

  it(`renders with custom properties`, () => {
    render(<Panel accountNumber={accountNumber} name={iconName} />)
    expect(screen.getByTitle(iconName)).toBeInTheDocument()
    expect(screen.getByText(accountNumber)).toBeInTheDocument()
  })
})
