import styled from "@emotion/styled"
import { css } from "@emotion/react"
import theme from "../theme/theme"

const sizes = {
  small: {
    typography: theme.typography.desktop.bodySmall,
    padding: "8px 52px",
  },
  medium: {
    typography: theme.typography.desktop.h6,
    padding: "10px 68px",
  },
  large: {
    typography: theme.typography.desktop.h5,
    padding: "12px 82px",
  },
}

const colors = {
  primary: {
    mainColor: theme.colors.primary[500],
    filledText: theme.colors.neutrals[100],
  },
  black: {
    mainColor: theme.colors.grey[600],
    filledText: theme.colors.neutrals[100],
  },
  white: {
    mainColor: theme.colors.neutrals[100],
    filledText: theme.colors.primary[300],
  },
}
export const Component = styled.a`
  ${({ size }) => sizes[size].typography};
  letter-spacing: -0.02em;
  border-radius: 30px;
  cursor: pointer;
  text-decoration: none;
  position: relative;
  display: inline-block;
  padding: ${({ size }) => sizes[size].padding};
  color: ${({ variant, color }) =>
    variant === "fill" ? colors[color].filledText : colors[color].mainColor};
  background-color: ${({ variant, color }) =>
    variant === "fill" ? colors[color].mainColor : "transparent"};
  border: ${({ variant, color }) =>
    variant === "border" ? `2px solid ${colors[color].mainColor}` : "none"};

  ${({ variant }) =>
    (variant === "textLine" || variant === "text") &&
    css`
      border-radius: 0;
      padding: 4px;
    `}
`

export const Text = styled.span`
  ${({ variant }) =>
    variant === "textLine" &&
    css`
      text-decoration: underline;
    `}

  ${({ active, variant, color }) =>
    active &&
    variant === "text" &&
    css`
      border-bottom: 2px solid ${colors[color].mainColor};
    `}
`

export const Icon = styled.span`
  padding: 0px 4px;
  height: ${({ size }) => sizes[size].typography.lineHeight};
  width: ${({ size }) => sizes[size].typography.lineHeight};
  position: absolute;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg {
    padding: ${({ size }) => {
      switch (size) {
        case "small":
          return "5px"
        case "medium":
          return "6px"
        case "large":
          return "7px"
        default:
          return "6px"
      }
    }};
  }
`
