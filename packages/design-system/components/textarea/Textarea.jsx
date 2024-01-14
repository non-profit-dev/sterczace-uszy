import { bool, number, string } from "prop-types"
import Icon from "design-system/components/icon"
import Typography from "design-system/components/typography"
import theme from "design-system/tokens/theme"
import { forwardRef } from "react"

import * as Styled from "./Textarea.styled"
import ErrorMessage from "../errorMessage"

const errorColor = theme.colors.error[100]

const Textarea = forwardRef(
  (
    {
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
      ...rest
    },
    ref
  ) => (
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
          ref={ref}
          {...rest}
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
          color={error ? errorColor : theme.colors.gray[500]}
          data-testid="message"
        >
          {message}
        </Typography>
      )}
      {message && error && <ErrorMessage errorMessage={message} />}
    </Styled.Label>
  )
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

Textarea.displayName = "Textarea"

export default Textarea
