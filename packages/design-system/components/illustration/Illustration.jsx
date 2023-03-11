import { oneOf } from "prop-types"

import HeartWithDogFace from "design-system/tokens/illustrations/heartWithDogFace.svg"
import HeartIllustration from "design-system/tokens/illustrations/HeartIllustration.svg"
import DogIllustration from "design-system/tokens/illustrations/DogIllustration.svg"
import HomeIllustration from "design-system/tokens/illustrations/HomeIllustration.svg"

const sizes = {
  heartWithDogFace: {
    small: {
      width: 177,
      height: 160,
    },
    medium: {
      width: 177,
      height: 160,
    },
    large: {
      width: 177,
      height: 160,
    },
  },
  heart: {
    small: {
      width: 78,
      height: 70,
    },
    medium: {
      width: 103,
      height: 92,
    },
    large: {
      width: 121,
      height: 109,
    },
  },
  dog: {
    small: {
      width: 67,
      height: 74,
    },
    medium: {
      width: 93,
      height: 99,
    },
    large: {
      width: 110,
      height: 116,
    },
  },
  home: {
    small: {
      width: 59,
      height: 68,
    },
    medium: {
      width: 78,
      height: 91,
    },
    large: {
      width: 91,
      height: 107,
    },
  },
}

export const illustrations = {
  heartWithDogFace: HeartWithDogFace,
  heart: HeartIllustration,
  dog: DogIllustration,
  home: HomeIllustration,
}

const Illustration = ({ name, size }) => {
  const IllustrationComponent = illustrations[name]

  return (
    <IllustrationComponent
      width={sizes[name][size].width}
      height={sizes[name][size].height}
      title={name}
      aria-hidden="true"
    />
  )
}

Illustration.propTypes = {
  name: oneOf(Object.keys(illustrations)).isRequired,
  size: oneOf(["small", "medium", "large"]),
}
Illustration.defaultProps = {
  size: "large",
}

export default Illustration
