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
import HeartOutline from "../../icons/HeartOutline.svg"
import Instagram from "../../icons/Instagram.svg"
import Location from "../../icons/Location.svg"
import Mail from "../../icons/Mail.svg"
import One from "../../icons/One.svg"
import Phone from "../../icons/Phone.svg"
import Three from "../../icons/Three.svg"
import Two from "../../icons/Two.svg"

export const sizes = {
  small: {
    width: 16,
    height: 16,
  },
  medium: {
    width: 24,
    height: 24,
  },
  large: {
    width: 30,
    height: 30,
  },
  xlarge: {
    width: 23,
    height: 36,
  },
  xxlarge: {
    width: 30,
    height: 48,
  },
}

export const icons = {
  arrowDown: ArrowDown,
  arrowRight: ArrowRight,
  chevronRight: ChevronRight,
  done: Done,
  doubleArrow: DoubleArrow,
  download: Download,
  facebook: Facebook,
  instagram: Instagram,
  location: Location,
  phone: Phone,
  mail: Mail,
  charity: Charity,
  heart: Heart,
  heartOutline: HeartOutline,
  cat: Cat,
  dog: Dog,
  one: One,
  two: Two,
  three: Three,
}

const Icon = ({ name, color, size }) => {
  const IconComponent = icons[name]

  return (
    <IconComponent
      color={color}
      width={sizes[size].width}
      height={sizes[size].height}
      title={name}
      aria-hidden="true"
    />
  )
}

Icon.propTypes = {
  name: oneOf(Object.keys(icons)).isRequired,
  color: string,
  size: oneOf(Object.keys(sizes)),
}

Icon.defaultProps = {
  color: "primary",
  size: "medium",
}

export default Icon
