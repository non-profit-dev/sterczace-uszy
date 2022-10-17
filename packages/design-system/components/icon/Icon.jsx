import { string, oneOf } from "prop-types"

import ArrowDown from "../../icons/ArrowDown.svg"
import ArrowRight from "../../icons/ArrowRight.svg"
import Cat from "../../icons/Cat.svg"
import Charity from "../../icons/Charity.svg"
import ChevronRight from "../../icons/ChevronRight.svg"
import Dog from "../../icons/Dog.svg"
import Done from "../../icons/Done.svg"
import DoubleArrow from "../../icons/DoubleArrow.svg"
import Download from "../../icons/Download.svg"
import Facebook from "../../icons/Facebook.svg"
import Heart from "../../icons/Heart.svg"
import Instagram from "../../icons/Instagram.svg"
import Location from "../../icons/Location.svg"
import Mail from "../../icons/Mail.svg"
import One from "../../icons/One.svg"
import Phone from "../../icons/Phone.svg"
import Three from "../../icons/Three.svg"
import Two from "../../icons/Two.svg"

const sizes = {
  small: 16,
  medium: 24,
  large: 30,
  // xlarge: 36,
  // xxlarge: 48,
}

export const icons = {
  arrowDown: ArrowDown,
  arrowRight: ArrowRight,
  cat: Cat,
  chevronRight: ChevronRight,
  charity: Charity,
  dog: Dog,
  done: Done,
  doubleArrow: DoubleArrow,
  download: Download,
  facebook: Facebook,
  heart: Heart,
  instagram: Instagram,
  location: Location,
  mail: Mail,
  one: One,
  phone: Phone,
  three: Three,
  two: Two,
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
  size: oneOf(["small", "medium", "large", "xlarge", "xxlarge"]),
}

Icon.defaultProps = {
  color: "primary",
  size: "medium",
}

export default Icon
