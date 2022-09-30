import userEvent from "@testing-library/user-event"
import { render, screen, act } from "../../../test-utils"

import Badge from "../Badge"

const exampleText = "Lorem ipsum"

// Group tests
// describe(`Badge`, () => {
//   it(`renders with default properties`, () => {
//     // Render a React element into the DOM
//     render(<Badge />)

//     // expect(screen.getByText(heading)).toBeInTheDocument()
//     // expect(screen.getByText(description)).toBeInTheDocument()
//   })
// })
