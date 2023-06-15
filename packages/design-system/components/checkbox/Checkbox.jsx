import { bool, oneOf, string } from "prop-types"
import Typography from "design-system/components/typography"
import theme from "design-system/tokens/theme"
import { useState } from "react"
import * as Styled from "./Checkbox.styled"

const Checkbox = ({
  label,
  state,
  required,
  disabled,
  id,
  className,
  checked,
}) => {
  const defaultChecked = checked || false
  const [isChecked, setIsChecked] = useState(defaultChecked)

  const handleCheckboxChange = () => {
    if (!disabled) {
      setIsChecked((prev) => !prev)
    }
  }

  return (
    <Styled.Container onClick={handleCheckboxChange}>
      <Styled.Checkbox
        checked={isChecked}
        state={state}
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
      <Styled.Label>
        <Typography
          variant="bodySmall"
          color={disabled ? theme.colors.gray[400] : theme.colors.gray[600]}
        >
          {label}
        </Typography>
        {required && !isChecked && state === "error" && (
          <Typography variant="bodyTiny" color={theme.colors.error[100]}>
            Zaznacz zgodę.
          </Typography>
        )}
      </Styled.Label>
    </Styled.Container>
  )
}

Checkbox.propTypes = {
  label: string.isRequired,
  state: oneOf(["error", "active"]),
  required: bool,
  disabled: bool,
  checked: bool,
  id: string,
  className: string,
}

Checkbox.defaultProps = {
  state: null,
  required: false,
  disabled: false,
  checked: false,
  id: null,
  className: null,
}

export default Checkbox
