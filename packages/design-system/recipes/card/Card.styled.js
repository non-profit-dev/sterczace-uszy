import styled from "@emotion/styled"
import { css } from "@emotion/react"

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
      box-shadow: 2px 2px 9px 0px #000000;
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
  margin-bottom: 24px;
`
export const Image = styled.img`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: auto;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${({ layout }) =>
    layout === "center"
      ? css`
          align-items: center;
        `
      : css`
          align-items: flex-start;
        `}
  box-sizing: border-box;
  width: 100%;
  gap: 10px;
  padding: 0px;
  padding: 0px 14px 0px 14px;
`
