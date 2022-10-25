import styled from "@emotion/styled"
import { css } from "@emotion/react"

export const Card = styled.a`
  display: flex;
  width: 100%;
  color: "black";
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 36px 10px 36px 10px;
  border: 1px solid;
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
`
export const IllustrationContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  width: 100%;
  padding: 0px;
  margin-bottom: 30px;
  border: 1px solid;
`
export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0px;
  margin-bottom: 36px;
  border: 1px solid;
`
export const ContentContainer = styled.div`
  display: flex;
  background-color: inherit;
  flex-direction: column;
  ${({ layout }) =>
    layout === "center" &&
    css`
      align-items: center;
    `}
  width: 100%;
  gap: 10px;
  padding: 0px;
  margin: 0px 20px 0px 20px;
  border: 1px solid;
  max-width: 100%;
`

// TODO paddings depends of card variant
