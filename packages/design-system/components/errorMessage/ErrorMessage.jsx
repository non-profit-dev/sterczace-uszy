import { string } from "prop-types"
import Typography from "design-system/components/typography"

import theme from "design-system/tokens/theme"

const ErrorMessage = ({ errorMessage }) => (
  <Typography
    variant="bodyTiny"
    color={theme.colors.error[100]}
    error={!!errorMessage}
    data-testid="errorMessage"
  >
    {errorMessage}
  </Typography>
)

ErrorMessage.propTypes = {
  errorMessage: string,
}

ErrorMessage.defaultProps = {
  errorMessage: "",
}

export default ErrorMessage
