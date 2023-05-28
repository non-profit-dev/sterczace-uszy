import styled from "@emotion/styled"
import { css } from "@emotion/react"
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
    mainColor: theme.colors.primary[500],
    filledText: theme.colors.neutrals[100],
  },
  black: {
    mainColor: theme.colors.gray[600],
    filledText: theme.colors.neutrals[100],
  },
  white: {
    mainColor: theme.colors.neutrals[100],
    filledText: theme.colors.neutrals[100],
  },
}
export const Component = styled.a`
  letter-spacing: -0.02em;
  border-radius: 30px;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;

  color: ${({ variant, color }) =>
    variant === "fill" ? colors[color].filledText : colors[color].mainColor};
  background-color: ${({ variant, color }) =>
    variant === "fill" ? colors[color].mainColor : "transparent"};
  border: ${({ variant, color }) =>
    variant === "border" ? `2px solid ${colors[color].mainColor}` : "none"};

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
`

export const Text = styled.span`
  ${({ active, variant, color }) =>
    active &&
    variant === "text" &&
    css`
      border-bottom: 2px solid ${colors[color].mainColor};
    `}
  :hover {
    ${({ variant }) =>
      variant === "text" &&
      css`
        text-decoration: underline;
      `}
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
