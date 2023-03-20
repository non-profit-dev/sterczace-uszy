import { oneOf, string } from "prop-types"

import HeartWithDogFace from "design-system/tokens/illustrations/heartWithDogFace.svg"
import HeartIllustration from "design-system/tokens/illustrations/HeartIllustration.svg"
import DogIllustration from "design-system/tokens/illustrations/DogIllustration.svg"
import HomeIllustration from "design-system/tokens/illustrations/HomeIllustration.svg"
import ruleFirst from "design-system/tokens/illustrations/ruleFirst.svg"
import ruleSecond from "design-system/tokens/illustrations/ruleSecond.svg"
import ruleThird from "design-system/tokens/illustrations/ruleThird.svg"

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
  RuleFirst: {
    small: {
      width: 250,
      height: 250,
    },
    medium: {
      width: 250,
      height: 250,
    },
    large: {
      width: 250,
      height: 250,
    },
  },
  RuleSecond: {
    small: {
      width: 250,
      height: 250,
    },
    medium: {
      width: 250,
      height: 250,
    },
    large: {
      width: 250,
      height: 250,
    },
  },
  RuleThird: {
    small: {
      width: 250,
      height: 250,
    },
    medium: {
      width: 350,
      height: 250,
    },
    large: {
      width: 150,
      height: 250,
    },
  },
}

export const illustrations = {
  heartWithDogFace: HeartWithDogFace,
  heart: HeartIllustration,
  dog: DogIllustration,
  home: HomeIllustration,
  RuleFirst: ruleFirst,
  RuleSecond: ruleSecond,
  RuleThird: ruleThird,
}

const Illustration = ({ name, className, size }) => {
  const IllustrationComponent = illustrations[name]

  return (
    <IllustrationComponent
      width={sizes[name][size].width}
      height={sizes[name][size].height}
      title={name}
      aria-hidden="true"
      className={className}
    />
  )
}

Illustration.propTypes = {
  name: oneOf(Object.keys(illustrations)).isRequired,
  size: oneOf(["small", "medium", "large"]),
  className: string,
}

Illustration.defaultProps = {
  size: "large",
  className: null,
}

export default Illustration
