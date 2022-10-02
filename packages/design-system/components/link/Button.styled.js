import styled from "@emotion/styled"
import { css } from "@emotion/react"
import theme from "../theme/theme"

const sizes = {
  small: {
    text: "16px",
    padding: "8px 52px",
  },
  medium: {
    text: "20px",
    padding: "10px 68px",
  },
  large: {
    text: "24px",
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
export const Component = styled.div`
  font-family: "Poppins";
  border-radius: 30px;
  line-height: 1.2;
  font-weight: 600;
  letter-spacing: -0.02em;
  position: relative;
  display: inline-block;
  padding: ${({ size }) => sizes[size].padding};
  font-size: ${({ size }) => sizes[size].text};
  color: ${({ variant, color }) =>
    variant === "fill" ? colors[color].filledText : colors[color].mainColor};
  background-color: ${({ variant, color }) =>
    variant === "fill" ? colors[color].mainColor : "transparent"};
  border: ${({ variant, color }) =>
    variant === "border" ? `2px solid ${colors[color].mainColor}` : "none"};

  ${({ variant, color }) =>
    variant === "textLine" &&
    css`
      border-radius: 0;
      /* border-bottom: 2px solid ${colors[color].mainColor}; */
      padding: 2px 0;
    `}

  ${({ variant }) =>
    variant === "text" &&
    css`
      padding: 2px 0;
    `}
`

export const Link = styled.a`
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  border: none;
  background: transparent;
  color: ${({ variant, color }) =>
    variant === "fill" ? colors[color].filledText : colors[color].mainColor};

  ${({ variant }) =>
    variant === "textLine" &&
    css`
      text-decoration-line: underline;
    `}
`

export const Icon = styled.span`
  padding: 6px 8px;
  border: none;
  cursor: pointer;
  background-color: transparent;
  /* position: absolute; */

  /* svg {
    fill: ${({ variant, color }) =>
    variant === "fill" ? colors[color].filledText : colors[color].mainColor};
  } */
`
