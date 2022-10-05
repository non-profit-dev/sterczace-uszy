import { render } from "../../../test-utils"
import Typography from "../Typography"

const text = "Lorem ipsum"

describe(`Typography`, () => {
  it("should renders h1 with primary color", () => {
    render(<Typography text={text} color="primary" variant="h1" />)
  })
  it("should renders h1 as h2", () => {
    render(<Typography variant="h1" as="h2" />)
  })
})
