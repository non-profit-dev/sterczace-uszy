import styled from "@emotion/styled"
import { css } from "@emotion/react"
import theme from "../../tokens/theme"

const sizes = {
  xsmall: {
    padding: "8px 32px",
  },
  small: {
    padding: "8px 32px",
  },
  medium: {
    padding: "10px 40px",
  },
  large: {
    padding: "12px 48px",
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
  padding: ${({ size }) => sizes[size].padding};
  color: ${({ variant, color }) =>
    variant === "fill" ? colors[color].filledText : colors[color].mainColor};
  background-color: ${({ variant, color }) =>
    variant === "fill" ? colors[color].mainColor : "transparent"};
  border: ${({ variant, color }) =>
    variant === "border" ? `2px solid ${colors[color].mainColor}` : "none"};

  ${({ size }) =>
    size === "large" &&
    css`
      ${theme.breakpoints.tablet} {
        padding: 8px 32px;
      }

      ${theme.breakpoints.mobile} {
        padding: 8px 32px;
      }
    `}
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
