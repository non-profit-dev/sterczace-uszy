import { bool, oneOf, string } from "prop-types"
import Icon, { icons } from "design-system/components/icon"

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
}) => {
  console.log(icons.done)

  return (
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
        <Styled.Icon state={state}>
          <Icon name="done" size="medium" />
        </Styled.Icon>
      </Styled.Container>
      <Styled.Message required={required}>
        {required ? "Pole wymagane" : message}
      </Styled.Message>
    </Styled.Label>
  )
}

Input.propTypes = {
  label: string,
  placeholder: string,
  state: oneOf(["valid", "error", null]),
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
  message: null,
  required: false,
  disabled: false,
  type: null,
  name: null,
  id: null,
}

export default Input
