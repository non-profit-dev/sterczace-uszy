import { bool, oneOf, string } from "prop-types"
import Icon from "design-system/components/icon"
import Typography from "design-system/components/typography"
import theme from "design-system/tokens/theme"
import { forwardRef } from "react"

import * as Styled from "./Input.styled"
import ErrorMessage from "../errorMessage"

const colors = {
  valid: theme.colors.success[100],
  error: theme.colors.error[100],
}

// eslint-disable-next-line react/display-name
const Input = forwardRef(
  (
    {
      label,
      placeholder,
      state,
      message,
      required,
      disabled,
      type,
      name,
      id,
      className,
    },
    ref
  ) => (
    <Styled.Label>
      <Typography variant="bodySmall">{label}</Typography>
      <Styled.Container>
        <Styled.Input
          placeholder={placeholder}
          state={state}
          required={required}
          disabled={disabled}
          type={type}
          name={name}
          id={id}
          className={className}
          ref={ref}
        />
        {state && (
          <Styled.Icon state={state}>
            <Icon name={state === "valid" ? "check" : "close"} size="medium" />
          </Styled.Icon>
        )}
      </Styled.Container>
      {message && state !== "error" && (
        <Typography
          variant="bodyTiny"
          color={state ? colors[state] : theme.colors.gray[500]}
          data-testid="message"
        >
          {message}
        </Typography>
      )}
      {message && state === "error" && <ErrorMessage errorMessage={message} />}
    </Styled.Label>
  )
)

Input.propTypes = {
  label: string.isRequired,
  placeholder: string,
  /**
   * The state of the input, whether it is valid or has an error.
   */
  state: oneOf(["valid", "error"]),
  /**
   * Additional message to display below the input.
   */
  message: string,
  required: bool,
  disabled: bool,
  type: oneOf(["text", "number", "email", "tel"]).isRequired,
  name: string,
  id: string,
  className: string,
}

Input.defaultProps = {
  placeholder: "",
  state: null,
  message: "",
  required: false,
  disabled: false,
  name: null,
  id: null,
  className: null,
}

export default Input
