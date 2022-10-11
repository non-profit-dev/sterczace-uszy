/* eslint-disable no-shadow */
import styled from "@emotion/styled"
import theme from "../theme/theme"

const sizes = {
  small: {
    typography: theme.typography.desktop.bodySmall,
  },
  medium: {
    typography: theme.typography.desktop.bodySmall,
  },
}

const colors = {
  primary: {
    mainColor: theme.colors.complementary[100],
    filledText: theme.colors.primary[500],
  },
}
export const Annoucementbanner = styled.div`
  ${({ size }) => sizes[size].typography};
  background-color: ${({ theme }) => theme.colors.complementary[100]};
  color: ${({ variant, color }) =>
    variant === "fill" ? colors[color].filledText : colors[color].mainColor};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px, 80px, 10px, 80px;
  gap: 10px;
  height: 60px;
  position: relative;
`
export const Link = styled.a`
  ${({ size }) => sizes[size].typography};
  display: inline-block;
  cursor: pointer;
  text-decoration: underline;
  border: none;
  background: transparent;
  padding: 0;
  color: inherit;
  text-decoration: underline;
`

export const Icon = styled.span`
  height: ${({ size }) => sizes[size].typography.lineHeight};
  width: ${({ size }) => sizes[size].typography.lineHeight};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 60px;
  position: relative;

  svg {
    padding: ${({ size }) => {
      switch (size) {
        case "small":
          return "5px"
        case "medium":
          return "5px"
        case "large":
          return "5px"
        default:
          return "4px"
      }
    }};
  }
`
export const Heading = styled.h2`
  margin: 0;
  font-weight: 400;
  font-size: 16px;
  ${({ theme }) => theme.typography.desktop.bodySmall};
  color: ${({ theme }) => theme.colors.grey[500]};
  }
`
