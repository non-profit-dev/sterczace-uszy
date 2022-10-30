import { string, oneOf } from "prop-types"
import Button from "../../components/button/Button"
import Typography from "../../components/typography/Typography"

import * as Styled from "./TextBanner.styled"

const TextBanner = ({ heading, description, subtitle, layout, size }) => (
  <Styled.TextBanner layout={layout} size={size}>
    <Typography variant="h6" color="#C1121F">
      {subtitle}
    </Typography>
    <Typography variant="h2" color="primary">
      {heading}
    </Typography>
    <Typography variant="bodyTitle" color="primary">
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
  size: oneOf(["small", "medium", "large"]),
}

TextBanner.defaultProps = {
  subtitle: "",
  layout: oneOf(["left", "center"]),
  size: "medium",
}

export default TextBanner
