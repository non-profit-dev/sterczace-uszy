import { render } from "@testing-library/react"
import { ThemeProvider } from "@emotion/react"
import { node } from "prop-types"

import theme from "./theme/theme"

const Providers = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

Providers.propTypes = {
  children: node.isRequired,
}

const customRender = (ui, options) =>
  render(ui, { wrapper: Providers, ...options })

// re-export everything
export * from "@testing-library/react"

// override render method
export { customRender as render }
