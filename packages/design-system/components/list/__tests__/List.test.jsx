import { render } from "../../../test-utils"

import List from "../List"

const children = <li>Test1</li>

describe(`List`, () => {
  it(`renders with default properties`, () => {
    render(<List gap={20}>{children}</List>)
  })
})
