import { bool, number, string } from "prop-types"
import Icon from "design-system/components/icon"
import Typography from "design-system/components/typography"
import theme from "design-system/tokens/theme"

import * as Styled from "./Textarea.styled"
import ErrorMessage from "../errorMessage"

const Textarea = ({
  label,
  placeholder,
  error,
  message,
  required,
  disabled,
  name,
  id,
  className,
  minLength,
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
        className={className}
        minLength={minLength}
      />
      {error && (
        <Styled.Icon error={error}>
          <Icon name="close" size="medium" />
        </Styled.Icon>
      )}
    </Styled.Container>
    {message && !error && (
      <Typography
        variant="bodyTiny"
        color={theme.colors.gray[500]}
        data-testid="message"
      >
        {message}
      </Typography>
    )}
    {message && error && <ErrorMessage errorMessage={message} />}
  </Styled.Label>
)
// TODO should be error and message or message and errorMessage?

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
  className: string,
  minLength: number,
}

Textarea.defaultProps = {
  placeholder: "",
  error: false,
  message: "",
  required: false,
  disabled: false,
  name: null,
  id: null,
  className: null,
  minLength: null,
}

export default Textarea
