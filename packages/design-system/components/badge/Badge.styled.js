import styled from "@emotion/styled"
import theme from "../theme/theme"

const sizes = {
  small: {
    width: "84px",
    height: "20px",
    fontSize: "14px",
  },
  medium: {
    width: "93px",
    height: "22px",
    fontSize: "16px",
  },
  large: {
    width: "109px",
    height: "28px",
    fontSize: "20px",
  },
}

export const Badge = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 8px;
  width: ${({ size }) => sizes[size].width};
  min-width: 84px;
  height: ${({ size }) => sizes[size].height};
  min-height: 20px;
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
  gap: 10px;
  font-size: ${({ size }) => sizes[size].fontSize};
`
