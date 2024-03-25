import styled from "@emotion/styled"
import { css } from "@emotion/react"

import TypographyComponent from "design-system/components/typography"

import theme from "../../tokens/theme"

const paddings = {
  xsmall: {
    desktop: "8px 32px",
    tablet: "8px 32px",
    mobile: "6px 32px",
  },
  small: {
    desktop: "8px 32px",
    tablet: "8px 32px",
    mobile: "6px 32px",
  },
  medium: {
    desktop: "12px 40px",
    tablet: "7px 40px",
    mobile: "6px 40px",
  },
  large: {
    desktop: "12px 48px",
    tablet: "9px 48px",
    mobile: "6px 48px",
  },
}

const colors = {
  primary: {
    main: theme.colors.primary[500],
    hover: theme.colors.primary[600],
  },
  black: {
    main: theme.colors.gray[600],
    hover: theme.colors.primary[500],
  },
}
export const Component = styled.a`
  border-radius: ${({ variant }) => (variant === "text" ? 0 : "30px")};
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  transition: 200ms ease;

  color: ${({ variant, color }) =>
    variant === "fill" ? theme.colors.neutrals[100] : colors[color].main};
  background-color: ${({ variant, color }) =>
    variant === "fill" ? colors[color].main : "transparent"};
  border: ${({ variant, color }) =>
    variant === "border"
      ? `2px solid ${colors[color].main}`
      : "2px solid transparent"};

  padding: ${({ size, variant }) =>
    variant === "text" ? 0 : paddings[size].desktop};

  ${theme.breakpoints.tabletLg} {
    padding: ${({ size, variant }) =>
      variant === "text" ? 0 : paddings[size].tablet};
  }

  ${theme.breakpoints.mobileLg} {
    padding: ${({ size, variant }) =>
      variant === "text" ? 0 : paddings[size].mobile};
  }

  &:hover {
    color: ${({ variant, color }) =>
      variant === "fill" ? theme.colors.neutrals[100] : colors[color].hover};
    background-color: ${({ variant, color }) =>
      variant === "fill" ? colors[color].hover : "transparent"};
    border: ${({ variant, color }) =>
      variant === "border"
        ? `2px solid ${colors[color].hover}`
        : "2px solid transparent"};
  }

  &:focus {
    outline: 2px solid ${theme.colors.blue[100]};
    outline-offset: 2px;
  }
`

export const Icon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg {
    ${({ size }) =>
      size === "large" &&
      css`
        ${theme.breakpoints.tablet} {
          height: 18px;
          width: 18px;
        }

        ${theme.breakpoints.mobile} {
          height: 16px;
          width: 16px;
        }
      `}
  }
`

export const Typography = styled(TypographyComponent)`
  color: inherit;
`
