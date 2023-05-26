import { arrayOf, bool, string } from "prop-types"
import Icon from "design-system/components/icon"
import Typography from "design-system/components/typography"

import * as Styled from "./Select.styled"

const Select = ({
  label,
  options,
  disabled,
  name,
  id,
  required,
  defaultValue,
}) => {
  const convertToValue = (option) => option.replaceAll(" ", "-").toLowerCase()

  return (
    <Styled.Label>
      <Typography variant="bodySmall">{label}</Typography>
      <Styled.Container>
        <Styled.Select
          disabled={disabled}
          name={name}
          id={id}
          required={required}
        >
          <>
            {defaultValue && (
              <option value={convertToValue(defaultValue)}>
                {defaultValue}
              </option>
            )}
            {options.map((option) => (
              <option key={option} value={convertToValue(option)}>
                {option}
              </option>
            ))}
          </>
        </Styled.Select>
        <Styled.Icon>
          <Icon name="chevronDown" size="medium" />
        </Styled.Icon>
      </Styled.Container>
    </Styled.Label>
  )
}

Select.propTypes = {
  label: string.isRequired,
  options: arrayOf(string).isRequired,
  defaultValue: string,
  disabled: bool,
  name: string,
  id: string,
  required: bool,
}

Select.defaultProps = {
  defaultValue: "",
  disabled: false,
  name: null,
  id: null,
  required: false,
}

export default Select
