import { bool, oneOf, string } from "prop-types"
import Icon from "design-system/components/icon"

import * as Styled from "./Input.styled"

const Input = ({
  label,
  placeholder,
  state,
  message,
  required,
  disabled,
  type,
  name,
  id,
}) => (
  <Styled.Label>
    <Styled.LabelText>{label}</Styled.LabelText>
    <Styled.Container>
      <Styled.Input
        placeholder={placeholder}
        state={state}
        required={required}
        disabled={disabled}
        type={type}
        name={name}
        id={id}
      />
      {state && (
        <Styled.Icon state={state}>
          <Icon name={state === "valid" ? "success" : "error"} size="medium" />
        </Styled.Icon>
      )}
    </Styled.Container>
    <Styled.Message required={required}>
      {required ? "Pole wymagane" : message}
    </Styled.Message>
  </Styled.Label>
)

Input.propTypes = {
  label: string,
  placeholder: string,
  state: oneOf(["valid", "error"]),
  message: string,
  required: bool,
  disabled: bool,
  type: string,
  name: string,
  id: string,
}

Input.defaultProps = {
  label: null,
  placeholder: "",
  state: null,
  message: "",
  required: false,
  disabled: false,
  type: null,
  name: null,
  id: null,
}

export default Input
