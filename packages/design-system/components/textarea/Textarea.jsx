import { bool, string } from "prop-types"
import Icon from "design-system/components/icon"
import Typography from "design-system/components/typography"
import theme from "design-system/theme"

import * as Styled from "./Textarea.styled"

const Textarea = ({
  label,
  placeholder,
  state,
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
        state={state}
        required={required}
        disabled={disabled}
        name={name}
        id={id}
      />
      {state && (
        <Styled.Icon state={state}>
          <Icon name={state === "error" ? "error" : ""} size="medium" />
        </Styled.Icon>
      )}
    </Styled.Container>
    <Typography
      variant="bodyTiny"
      color={
        state === "error" ? theme.colors.error[100] : theme.colors.grey[500]
      }
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
  state: "error",
  message: string,
  required: bool,
  disabled: bool,
  name: string,
  id: string,
}

Textarea.defaultProps = {
  placeholder: "",
  state: null,
  message: "",
  required: false,
  disabled: false,
  name: null,
  id: null,
}

export default Textarea
