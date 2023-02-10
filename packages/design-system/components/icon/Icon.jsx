import { string, oneOf } from "prop-types"

import { icons } from "design-system/tokens/icons"

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

const Icon = ({ name, color, size }) => {
  const IconComponent = icons[name]

  return (
    <IconComponent
      color={color}
      width={sizes[size].width}
      height={sizes[size].height}
      title={name}
    />
  )
}

Icon.propTypes = {
  name: oneOf(Object.keys(icons)).isRequired,
  color: string,
  /**
   * The small, medium and large sizes have square proportions that fit most of the icons we use.
   */
  size: oneOf(Object.keys(sizes)),
}

Icon.defaultProps = {
  color: "primary",
  size: "medium",
}

export default Icon
