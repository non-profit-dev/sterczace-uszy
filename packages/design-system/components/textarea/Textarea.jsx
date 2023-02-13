import { bool, string } from "prop-types"
import Icon from "design-system/components/icon"
import Typography from "design-system/components/typography"
import theme from "design-system/tokens/theme"

import * as Styled from "./Textarea.styled"

const Textarea = ({
  label,
  placeholder,
  error,
  message,
  required,
  disabled,
  name,
  id,
}) => (
  <Styled.Label>
    <Typography variant="bodySmall">{label}</Typography>
    <Styled.Container>
      <Styled.Textarea
        placeholder={placeholder}
        error={error}
        required={required}
        disabled={disabled}
        name={name}
        id={id}
      />
      {error && (
        <Styled.Icon error={error}>
          <Icon name="close" size="medium" />
        </Styled.Icon>
      )}
    </Styled.Container>
    <Typography
      variant="bodyTiny"
      color={error ? theme.colors.error[100] : theme.colors.grey[500]}
      required={required}
      data-testid="message"
    >
      {required ? "Pole wymagane" : message}
    </Typography>
  </Styled.Label>
)

Textarea.propTypes = {
  label: string.isRequired,
  placeholder: string,
  error: bool,
  /**
   * Additional message to display below the input.
   */
  message: string,
  required: bool,
  disabled: bool,
  name: string,
  id: string,
}

Textarea.defaultProps = {
  placeholder: "",
  error: false,
  message: "",
  required: false,
  disabled: false,
  name: null,
  id: null,
}

export default Textarea
