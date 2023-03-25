import { oneOf, string } from "prop-types"

import HeartWithDogFace from "design-system/tokens/illustrations/heartWithDogFace.svg"
import HeartIllustration from "design-system/tokens/illustrations/HeartIllustration.svg"
import DogIllustration from "design-system/tokens/illustrations/DogIllustration.svg"
import HomeIllustration from "design-system/tokens/illustrations/HomeIllustration.svg"
import RuleFirst from "design-system/tokens/illustrations/ruleFirst.svg"
import RuleSecond from "design-system/tokens/illustrations/ruleSecond.svg"
import RuleThird from "design-system/tokens/illustrations/ruleThird.svg"
import Help from "design-system/tokens/illustrations/help.svg"
import Protect from "design-system/tokens/illustrations/protect.svg"
import Treat from "design-system/tokens/illustrations/treat.svg"
import Car from "design-system/tokens/illustrations/car.svg"
import Camera from "design-system/tokens/illustrations/camera.svg"
import Scissors from "design-system/tokens/illustrations/scissors.svg"
import Training from "design-system/tokens/illustrations/training.svg"
import Support from "design-system/tokens/illustrations/support.svg"
import WomanAndDog from "design-system/tokens/illustrations/womanAndDog.svg"
import Bowl from "design-system/tokens/illustrations/bowl.svg"
import TemporaryHome from "design-system/tokens/illustrations/temporaryHome.svg"

const sizes = {
  heartWithDogFace: {
    small: {
      width: 177,
      height: 80,
    },
    medium: {
      width: 177,
      height: 80,
    },
    large: {
      width: 177,
      height: 80,
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
  ruleFirst: {
    small: {
      width: 250,
      height: 250,
    },
    medium: {
      width: 250,
      height: 270,
    },
    large: {
      width: 250,
      height: 250,
    },
  },
  ruleSecond: {
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
  ruleThird: {
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
  car: {
    small: {
      width: 100,
      height: 100,
    },
    medium: {
      width: 100,
      height: 100,
    },
    large: {
      width: 100,
      height: 100,
    },
  },
  camera: {
    small: {
      width: 100,
      height: 100,
    },
    medium: {
      width: 100,
      height: 100,
    },
    large: {
      width: 100,
      height: 100,
    },
  },
  scissors: {
    small: {
      width: 100,
      height: 100,
    },
    medium: {
      width: 100,
      height: 100,
    },
    large: {
      width: 100,
      height: 100,
    },
  },
  training: {
    small: {
      width: 100,
      height: 100,
    },
    medium: {
      width: 100,
      height: 100,
    },
    large: {
      width: 100,
      height: 100,
    },
  },
  help: {
    small: {
      width: 100,
      height: 100,
    },
    medium: {
      width: 100,
      height: 100,
    },
    large: {
      width: 100,
      height: 100,
    },
  },
  protect: {
    small: {
      width: 100,
      height: 100,
    },
    medium: {
      width: 100,
      height: 100,
    },
    large: {
      width: 100,
      height: 100,
    },
  },
  treat: {
    small: {
      width: 100,
      height: 100,
    },
    medium: {
      width: 100,
      height: 100,
    },
    large: {
      width: 100,
      height: 100,
    },
  },
  bowl: {
    small: {
      width: 100,
      height: 100,
    },
    medium: {
      width: 100,
      height: 100,
    },
    large: {
      width: 100,
      height: 100,
    },
  },
  womanAndDog: {
    small: {
      width: 100,
      height: 100,
    },
    medium: {
      width: 100,
      height: 100,
    },
    large: {
      width: 100,
      height: 100,
    },
  },
  temporaryHome: {
    small: {
      width: 100,
      height: 100,
    },
    medium: {
      width: 100,
      height: 100,
    },
    large: {
      width: 100,
      height: 100,
    },
  },
    support: {
    small: {
      width: 100,
      height: 100,
    },
    medium: {
      width: 100,
      height: 100,
    },
    large: {
      width: 100,
      height: 100,
    },
  },
}

export const illustrations = {
  heartWithDogFace: HeartWithDogFace,
  car: Car,
  camera: Camera,
  scissors: Scissors,
  training: Training,
  heart: HeartIllustration,
  dog: DogIllustration,
  home: HomeIllustration,
  ruleFirst: RuleFirst,
  ruleSecond: RuleSecond,
  ruleThird: RuleThird,
  help: Help,
  protect: Protect,
  treat: Treat,
  support: Support,
  bowl: Bowl,
  womanAndDog: WomanAndDog,
  temporaryHome: TemporaryHome,
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
