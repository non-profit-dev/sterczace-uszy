import { string, oneOf, node } from "prop-types"

import Typography from "design-system/components/typography"
import theme from "../../tokens/theme"

import * as Styled from "./TextBanner.styled"

const sizes = {
  small: {
    subtitle: "h6",
    heading: "h3",
    description: "bodySmall",
  },
  medium: {
    subtitle: "h6",
    heading: "h2",
    description: "bodyTitle",
  },
  large: {
    subtitle: "h6",
    heading: "h1",
    description: "bodyTitle",
  },
}

const TextBanner = ({
  heading,
  children,
  subtitle,
  layout,
  tabletLayout,
  mobileLayout,
  size,
  button,
  subtitleColor,
  headingColor,
  headingTag,
  descriptionColor,
  className,
}) => (
  <Styled.TextBanner
    layout={layout}
    mobileLayout={mobileLayout}
    tabletLayout={tabletLayout}
    size={size}
    className={className}
  >
    {subtitle && (
      <Styled.Subtitle
        variant={sizes[size].subtitle}
        as={headingTag || sizes[size].heading}
        color={subtitleColor}
      >
        {subtitle}
      </Styled.Subtitle>
    )}

    <Styled.Container size={size}>
      <Typography
        variant={sizes[size].heading}
        color={headingColor}
        as={subtitle ? "p" : headingTag || sizes[size].heading}
      >
        {heading}
      </Typography>
    </Styled.Container>

    {children && (
      <Styled.Description
        variant={sizes[size].description}
        color={descriptionColor}
        as="div"
      >
        {children}
      </Styled.Description>
    )}

    {button && (
      <Styled.ButtonContainer size={size}>{button}</Styled.ButtonContainer>
    )}
  </Styled.TextBanner>
)

TextBanner.propTypes = {
  heading: string.isRequired,
  children: node,
  subtitle: string,
  layout: oneOf(["left", "center"]),
  tabletLayout: oneOf(["left", "center"]),
  mobileLayout: oneOf(["left", "center"]),
  size: oneOf(["small", "medium", "large"]),
  button: node,
  subtitleColor: string,
  headingColor: string,
  headingTag: oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  descriptionColor: string,
  className: string,
}

TextBanner.defaultProps = {
  subtitle: "",
  layout: "left",
  tabletLayout: "center",
  mobileLayout: "center",
  size: "medium",
  button: null,
  subtitleColor: theme.colors.primary[500],
  headingColor: theme.colors.gray[600],
  headingTag: null,
  descriptionColor: theme.colors.gray[600],
  className: null,
  children: null,
}

export default TextBanner
