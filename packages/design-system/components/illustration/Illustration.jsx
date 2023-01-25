import { oneOf, string } from "prop-types"

import HeartWithDogFace from "design-system/illustrations/heartWithDogFace.svg"

const sizes = {
  heartWithDogFace: {
    width: 177,
    height: 160,
  },
}

export const illustrations = {
  heartWithDogFace: HeartWithDogFace,
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
  className : string,
}

Illustration.defaultProps = {
  className: null, 
}

export default Illustration
