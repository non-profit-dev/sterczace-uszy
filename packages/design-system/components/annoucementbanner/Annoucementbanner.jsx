import { string, oneOf, func, bool, node } from "prop-types"

import * as Styled from "./Annoucementbanner.styled"

const typography = {
  small: {
    heading: "h6",
    description: "bodySmall",
  },
  medium: {
    heading: "h4",
    description: "bodyMedium",
  },
  large: {
    heading: "h3",
    description: "bodyLarge",
  },
}

const Annoucementbanner = ({
  // eslint-disable-next-line react/prop-types
  heading,
  href,
  text,
  iconStart,
  iconEnd,
  variant,
  color,
  size,
  active,
  onClick,
}) => (
  <Styled.Annoucementbanner
    variant={variant}
    color={color}
    size={size}
    onClick={onClick}
    data-testid="button"
  >
    <Styled.Heading typographyVariant={typography[size].heading}>
      {heading}
    </Styled.Heading>

    {iconStart && (
      <Styled.Icon variant={variant} color={color} size={size}>
        {iconStart}
      </Styled.Icon>
    )}
    <Styled.Link
      as={href ? `a` : `Annoucementbanner`}
      variant={variant}
      color={color}
      size={size}
      href={href}
      active={active}
    >
      {text}
    </Styled.Link>
    {iconEnd && (
      <Styled.Icon variant={variant} color={color} size={size}>
        {iconEnd}
      </Styled.Icon>
    )}
  </Styled.Annoucementbanner>
)

Annoucementbanner.propTypes = {
  heading: string.isRequired,
  text: string.isRequired,
  href: string,
  iconStart: node,
  iconEnd: node,
  variant: oneOf(["fill"]),
  color: oneOf(["primary"]),
  size: oneOf(["small", "medium"]),
  active: bool,
  onClick: func,
}

Annoucementbanner.defaultProps = {
  href: null,
  iconStart: null,
  iconEnd: null,
  variant: "fill",
  color: "primary",
  size: "medium",
  active: null,
  onClick: null,
}

export default Annoucementbanner
