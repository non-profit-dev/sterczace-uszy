import { string, oneOf } from "prop-types"
import Typography from "../typography/Typography"
import Button from "../button/Button"

import * as Styled from "./TextBanner.styled"

const sizes = {
  tiny: {
    size: (Typography.variantsMapping = "bodySmall"),
  },
  small: {
    size: (Typography.variantsMapping = "bodySmall"),
  },
  medium: {
    size: (Typography.variantsMapping = "h2"),
  },
  large: {
    size: (Typography.variantsMapping = "h1"),
  },
}

const TextBanner = ({ heading, description, subtitle, layout, size }) => (
  <Styled.TextBanner layout={layout} size={size}>
    <Typography variants={sizes[size]} color="#C1121F">
      {subtitle}
    </Typography>
    <Typography variant={sizes[size]} color="primary">
      {heading}
    </Typography>
    <Typography variant={sizes[size]} color="primary">
      {description}
    </Typography>
    <Button text="Button" variant="fill" color="primary" iconEnd="arrowDown" />
  </Styled.TextBanner>
)

TextBanner.propTypes = {
  heading: string.isRequired,
  description: string.isRequired,
  subtitle: string,
  layout: oneOf(["left", "center"]),
  size: oneOf(["tiny", "small", "medium", "large"]),
}

TextBanner.defaultProps = {
  subtitle: "",
  layout: oneOf(["left", "center"]),
  size: "medium",
}

export default TextBanner
