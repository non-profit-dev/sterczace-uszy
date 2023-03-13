import { oneOf, string } from "prop-types"

import HeartWithDogFace from "design-system/tokens/illustrations/heartWithDogFace.svg"
import Car from "design-system/tokens/illustrations/car.svg"
import Camera from "design-system/tokens/illustrations/camera.svg"
import Scissors from "design-system/tokens/illustrations/scissors.svg"
import Training from "design-system/tokens/illustrations/training.svg"

const sizes = {
  heartWithDogFace: {
    width: 177,
    height: 160,
  },
  car: {
    width: 100,
    height: 100,
  },
  camera: {
    width: 100,
    height: 100,
  },
  scissors: {
    width: 100,
    height: 100,
  },
  training: {
    width: 100,
    height: 100,
  },
}

export const illustrations = {
  heartWithDogFace: HeartWithDogFace,
  car: Car,
  camera: Camera,
  scissors: Scissors,
  training: Training,
}

const Illustration = ({ name, className }) => {
  const IllustrationComponent = illustrations[name]

  return (
    <IllustrationComponent
      width={sizes[name].width}
      height={sizes[name].height}
      title={name}
      aria-hidden="true"
      className={className}
      fill="currentColor"
    />
  )
}

Illustration.propTypes = {
  name: oneOf(Object.keys(illustrations)).isRequired,
  className: string,
}

Illustration.defaultProps = {
  className: null,
}

export default Illustration
