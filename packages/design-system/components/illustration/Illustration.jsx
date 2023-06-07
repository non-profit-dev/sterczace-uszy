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
import DogCat from "design-system/tokens/illustrations/dog-cat.svg"
import Support from "design-system/tokens/illustrations/support.svg"
import WomanAndDog from "design-system/tokens/illustrations/womanAndDog.svg"
import Bowl from "design-system/tokens/illustrations/bowl.svg"
import TemporaryHome from "design-system/tokens/illustrations/temporaryHome.svg"
import DogRescue from "design-system/tokens/illustrations/dogRescue.svg"
import Percentage from "design-system/tokens/illustrations/percentage.svg"
import Hugging from "design-system/tokens/illustrations/hugging.svg"
import Information from "design-system/tokens/illustrations/information.svg"
import HeartLine from "design-system/tokens/illustrations/heartLine.svg"

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
  dogCat: DogCat,
  support: Support,
  bowl: Bowl,
  womanAndDog: WomanAndDog,
  temporaryHome: TemporaryHome,
  dogRescue: DogRescue,
  percentage: Percentage,
  hugging: Hugging,
  information: Information,
  heartLine: HeartLine,
}

const Illustration = ({ name, className }) => {
  const IllustrationComponent = illustrations[name]

  return (
    <IllustrationComponent
      title={name}
      aria-hidden="true"
      className={className}
      width="100%"
      height="100%"
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
