import styled from "@emotion/styled"
import theme from "../theme/theme"

const sizes = {
  small: {
    fontSize: "14px",
  },
  medium: {
    fontSize: "16px",
  },
  large: {
    fontSize: "20px",
  },
}

export const Badge = styled.span`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 8px;
  border-radius: 4px;
  background-color: ${({ variant }) => {
    switch (variant) {
      case "gray":
        return theme.colors.grey[200]
      case "neutrals":
        return theme.colors.neutrals[400]
      case "primary":
        return theme.colors.primary[500]
      default:
        return theme.colors.gray[200]
    }
  }};
  color: ${({ variant }) =>
    variant === "primary"
      ? theme.colors.neutrals[100]
      : theme.colors.grey[500]};
  font-size: ${({ size }) => sizes[size].fontSize};
`
