import styled from "@emotion/styled"
import { css } from "@emotion/react"

export const Accordion = styled.div`
  display: flex;
  text-decoration: none;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  border-radius: 10px;
  box-shadow: 2px 2px 9px 0px rgba(0, 0, 0, 0.1);
  background-color: ${({ activeColor, color, theme }) => {
    switch ((activeColor, color)) {
      case "white":
        return theme.colors.neutrals[100]
      case "primary":
        return theme.colors.neutrals[100]
      case "black":
        return theme.colors.grey[600]
      default:
        return theme.colors.grey[600]
    }
  }};
  color: ${({ activeColor, color, theme }) => {
    switch ((activeColor, color)) {
      case "white":
        return theme.colors.grey[600]
      case "black":
        return theme.colors.neutrals[100]
      case "primary":
        return theme.colors.primary[500]
      case "neutrals":
        return theme.colors.primary[500]
      default:
        return theme.colors.grey[600]
    }
  }};
`
export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-radius: 10px 10px 0px 0px;
  padding: 20px 20px 0px 25px;
`

export const Content = styled.div`
  border-radius: 0px 0px 10px 10px;
  text-decoration: none;
  padding: 20px 20px 20px 20px;
  width: 100%;
`

export const Icon = styled.div`
  transform: ${(props) => (props.isActive ? "rotate(180deg)" : "rotate(0)")};
  padding: 20px 20px 0px 20px;
`
