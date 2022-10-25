import styled from "@emotion/styled"
import { css } from "@emotion/react"
import theme from "../../components/theme/theme"

export const Card = styled.a`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  color: "black";
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 36px 10px 36px 10px;
  ${({ shadow }) =>
    shadow &&
    css`
      box-shadow: 2px 2px 30px -25px #000000;
    `}
  border-radius: 30px;

  :hover {
    ${({ shadow }) =>
      shadow &&
      css`
        box-shadow: 2px 2px 53px 0px #000000;
      `}
  }
  background-color: ${({ bgColor = "transparent" }) => bgColor};
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${({ bgImage = "none" }) => bgImage};
`
export const IllustrationContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  padding: 0px;
  margin-bottom: 18px;
`
export const ImageContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  padding: 0px;
  margin-bottom: 34px;
`
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${({ layout }) =>
    layout === "center" &&
    css`
      align-items: center;
    `}
  box-sizing: border-box;
  width: 100%;
  gap: 10px;
  padding: 0px;
  padding: 0px 10px 0px 10px;
  max-width: 100%;
`

// TODO paddings depends of card variant
