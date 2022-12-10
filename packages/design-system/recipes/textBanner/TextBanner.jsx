import { string, oneOf, node } from "prop-types"

import { useTheme } from "@emotion/react"
import Typography from "design-system/components/typography/Typography"

import * as Styled from "./TextBanner.styled"

const sizes = {
  tiny: {
    subtitle: "h6",
    heading: "h3",
    description: "bodySmall",
    button: "text",
    buttonSize: "medium",
  },
  small: {
    subtitle: "h6",
    heading: "h2",
    description: "bodyTitle",
    button: "fill",
    buttonSize: "large",
  },
  medium: {
    subtitle: "h6",
    heading: "h1",
    description: "bodySmall",
    button: "fill",
    buttonSize: "large",
  },
  large: {
    subtitle: "h6",
    heading: "h1",
    description: "bodyTitle",
    button: "fill",
    buttonSize: "large",
  },
}

const TextBanner = ({
  heading,
  description,
  subtitle,
  layout,
  size,
  button,
  color,
}) => {
  const theme = useTheme()
  return (
    <Styled.TextBanner layout={layout} size={size}>
      <Typography
        variant={sizes[size].subtitle}
        color={theme.colors.primary[500]}
      >
        {subtitle}
      </Typography>
      <Styled.Container size={size}>
        <Typography variant={sizes[size].heading} color={color}>
          {heading}
        </Typography>
      </Styled.Container>
      <Typography variant={sizes[size].description} color={color}>
        {description}
      </Typography>
      <Styled.ButtonContainer> {button && button}</Styled.ButtonContainer>
    </Styled.TextBanner>
  )
}

TextBanner.propTypes = {
  heading: string.isRequired,
  description: string.isRequired,
  subtitle: string,
  layout: oneOf(["left", "center"]),
  size: oneOf(["tiny", "small", "medium", "large"]),
  button: node,
  color: string,
}

TextBanner.defaultProps = {
  subtitle: "",
  layout: "left",
  size: "medium",
  button: null,
}

export default TextBanner
