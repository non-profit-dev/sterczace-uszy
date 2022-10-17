import { string, oneOf } from "prop-types"

import Heart from "../../icons/Heart.svg"
import ArrowDown from "../../icons/ArrowDown.svg"
import Download from "../../icons/Download.svg"
import ArrowRight from "../../icons/ArrowRight.svg"
import DoubleArrow from "../../icons/DoubleArrow.svg"

const sizes = {
  small: 16,
  medium: 24,
  large: 30,
  // xlarge: 30 x 48,
  // xxlarge: 23 x 36,
}

export const icons = {
  heart: Heart,
  arrowDown: ArrowDown,
  download: Download,
  arrowRight: ArrowRight,
  doubleArrow: DoubleArrow,
}

const Icon = ({ name, color, size }) => {
  const IconComponent = icons[name]

  return (
    <IconComponent
      color={color}
      width={sizes[size]}
      height={sizes[size]}
      title={name}
      aria-hidden="true"
    />
  )
}

Icon.propTypes = {
  name: oneOf(Object.keys(icons)).isRequired,
  color: string,
  size: oneOf(["small", "medium", "large"]),
}

Icon.defaultProps = {
  color: "primary",
  size: "medium",
}

export default Icon
