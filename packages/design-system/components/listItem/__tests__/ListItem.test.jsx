import { render } from "../../../test-utils"

import ListItem from "../ListItem"

const ChildComponent = () => <div>loremIpsum</div>
const MockIcon = () => <span>icon</span>

// Group tests
describe(`ListItem`, () => {
  it(`renders with default properties`, () => {
    render(
      <ListItem>
        <ChildComponent />
      </ListItem>
    )
  })
  it(`renders with custom properties`, () => {
    render(
      <ListItem variant="gray">
        <ChildComponent />
      </ListItem>
    )
  })

  it(`renders the list item element with icon`, () => {
    render(<ListItem variant="primary" icon={<MockIcon />} />)
  })
})
