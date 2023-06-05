import { render } from "design-system/test-utils"
import Panel from "design-system/patterns/panel"

jest.mock("design-system/helpers/useCopyToClipboard", () => ({
  __esModule: true,
  default: () => [false, jest.fn()],
}))

const title = "Test Title"
const children = <div>Test Children</div>
const accountNumber = "1234567890"

describe("Panel component", () => {
  it("should render title and children correctly", () => {
    const { getByText } = render(
      <Panel title={title} accountNumber={accountNumber}>
        {children}
      </Panel>
    )

    expect(getByText(title)).toBeInTheDocument()
  })
})
