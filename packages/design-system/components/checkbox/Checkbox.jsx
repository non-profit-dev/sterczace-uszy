import { bool, string } from "prop-types"
import Typography from "design-system/components/typography"
import theme from "design-system/tokens/theme"
import { useState } from "react"
import * as Styled from "./Checkbox.styled"

const Checkbox = ({ label, required, disabled, error, className, checked }) => {
  const [isChecked, setIsChecked] = useState(checked)

  const handleCheckboxChange = () => {
    if (!disabled) {
      setIsChecked((prev) => !prev)
    }
  }

  return (
    <Styled.Container onClick={handleCheckboxChange}>
      <Styled.Checkbox
        checked={isChecked}
        error={error}
        required={required}
        disabled={disabled}
        type="checkbox"
        id="checkbox"
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
      <Styled.Label for="checkbox">
        <Typography
          variant="bodySmall"
          color={disabled ? theme.colors.gray[400] : theme.colors.gray[600]}
        >
          {label}
        </Typography>
        {error && (
          <Typography
            variant="bodyTiny"
            color={theme.colors.error[100]}
            error={error}
          >
            Zaznacz zgodę.
          </Typography>
        )}
      </Styled.Label>
    </Styled.Container>
  )
}

Checkbox.propTypes = {
  label: string.isRequired,
  error: bool,
  required: bool,
  disabled: bool,
  checked: bool,
  className: string,
}

Checkbox.defaultProps = {
  required: false,
  error: false,
  disabled: false,
  checked: false,
  className: null,
}

export default Checkbox
