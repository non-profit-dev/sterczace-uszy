import { bool, string, node, oneOfType } from "prop-types"
import Typography from "design-system/components/typography"
import theme from "design-system/tokens/theme"
import { useState } from "react"
import ErrorMessage from "design-system/components/errorMessage"
import * as Styled from "./Checkbox.styled"

const Checkbox = ({
  label,
  required,
  disabled,
  error,
  errorMessage,
  className,
  checked,
  id,
}) => {
  const [isChecked, setIsChecked] = useState(checked)

  const handleCheckboxChange = () => {
    setIsChecked((prev) => !prev)
  }

  return (
    <Styled.Container>
      <Styled.Label htmlFor={id}>
        <Styled.Checkbox
          checked={isChecked}
          onChange={!disabled && handleCheckboxChange}
          error={error}
          required={required}
          disabled={disabled}
          type="checkbox"
          id={id}
          className={className}
        />
        {isChecked && (
          <Styled.CheckboxIcon
            name="check"
            size="small"
            color={theme.colors.neutrals[100]}
            data-testid="checkbox-icon"
          />
        )}
        <Typography
          variant="bodySmall"
          color={disabled ? theme.colors.gray[400] : theme.colors.gray[600]}
        >
          {label}
        </Typography>
        {error && <ErrorMessage errorMessage={errorMessage} />}
      </Styled.Label>
    </Styled.Container>
  )
}

Checkbox.propTypes = {
  label: oneOfType([string, node]).isRequired,
  error: bool,
  errorMessage: string,
  required: bool,
  disabled: bool,
  checked: bool,
  id: string.isRequired,
  className: string,
}

Checkbox.defaultProps = {
  required: false,
  error: false,
  disabled: false,
  checked: false,
  className: null,
  errorMessage: "Zaznacz zgodę.",
}

export default Checkbox
