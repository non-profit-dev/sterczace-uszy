import { string, oneOf } from "prop-types"
import { useTheme } from "@emotion/react"
import Typography from "../typography/Typography"
import Button from "../button/Button"

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

const TextBanner = ({ heading, description, subtitle, layout, size }) => {
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
        <Typography
          variant={sizes[size].heading}
          color={theme.colors.grey[600]}
        >
          {heading}
        </Typography>
      </Styled.Container>
      <Typography
        variant={sizes[size].description}
        color={theme.colors.grey[500]}
      >
        {description}
      </Typography>
      <Styled.ContainerButton size={size}>
        <Button
          variant={sizes[size].button}
          text="Button"
          color="primary"
          iconEnd="arrowDown"
          size={sizes[size].buttonSize}
        />
      </Styled.ContainerButton>
    </Styled.TextBanner>
  )
}

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
