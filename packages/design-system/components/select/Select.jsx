import { forwardRef } from "react"

import { arrayOf, bool, string } from "prop-types"
import Icon from "design-system/components/icon"
import Typography from "design-system/components/typography"

import * as Styled from "./Select.styled"

const Select = forwardRef(
  ({ label, options, disabled, name, id, required, ...rest }, ref) => (
    <Styled.Label>
      <Typography variant="bodySmall">{label}</Typography>
      <Styled.Container>
        <Styled.Select
          disabled={disabled}
          name={name}
          id={id}
          required={required}
          {...rest}
          ref={ref}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Styled.Select>
        <Styled.Icon>
          <Icon name="chevronDown" size="medium" />
        </Styled.Icon>
      </Styled.Container>
    </Styled.Label>
  )
)

Select.propTypes = {
  label: string.isRequired,
  options: arrayOf(string).isRequired,
  disabled: bool,
  name: string,
  id: string,
  required: bool,
}

Select.defaultProps = {
  disabled: false,
  name: null,
  id: null,
  required: false,
}

Select.displayName = "Select"

export default Select
