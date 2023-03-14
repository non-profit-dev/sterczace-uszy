import { oneOf, string } from "prop-types"

import HeartWithDogFace from "design-system/tokens/illustrations/heartWithDogFace.svg"

export const illustrations = {
  heartWithDogFace: HeartWithDogFace,
}

const Illustration = ({ name, className }) => {
  const IllustrationComponent = illustrations[name]

  return (
    <IllustrationComponent
      width="100%"
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
