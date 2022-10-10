// userEvent library simulates user interactions by dispatching the events that would happen if the interaction took place in a browser.
import userEvent from "@testing-library/user-event"

// import react-testing methods (wrapped with custom ThemeProvider added in the test-utils.jsx file)
import { render, screen, act } from "../../../test-utils"

import ListItem from "../ListItem"

const ChildComponent = () => <div>loremIpsum</div>

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

  // it(`renders the list item element with icon`, () => {
  //   render(<ListItem variant="primary" icon={{ MockIcon }} />)
  // })
})
