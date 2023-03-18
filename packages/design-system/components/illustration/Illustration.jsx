import { oneOf, string } from "prop-types"

import HeartWithDogFace from "design-system/tokens/illustrations/heartWithDogFace.svg"
import ruleFirst from "frontend/public/adoptionrules/ruleFirst.svg"
import ruleSecond from "frontend/public/adoptionrules/ruleSecond.svg"
import ruleThird from "frontend/public/adoptionrules/ruleThird.svg"

const sizes = {
  heartWithDogFace: {
    width: 177,
    height: 160,
  },
  RuleFirst: {
    width: 250,
    height: 220,
  },
  RuleSecond: {
    width: 250,
    height: 220,
  },
  RuleThird: {
    width: 250,
    height: 220,
  },
}

export const illustrations = {
  heartWithDogFace: HeartWithDogFace,
  RuleFirst: ruleFirst,
  RuleSecond: ruleSecond,
  RuleThird: ruleThird,
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
