import styled from "@emotion/styled"
import { css } from "@emotion/react"

export const Card = styled.a`
  display: flex;
  width: 100%;
  color: "black";
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  ${"" /* border: 1px solid; */}
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
  padding: 29px 0px 0px 0px;
  ${"" /* border: 1px solid; */}
`
export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px;
  margin: 5px;
  ${"" /* border: 1px solid; */}
`
export const ContentContainer = styled.div`
  display: flex;
  background-color: inherit;
  flex-direction: column;
  ${({ cardVersion }) =>
    cardVersion === "center" &&
    css`
      align-items: center;
    `}
  width: 100%;
  gap: 10px;
  ${"" /* border: 1px solid; */}
`

// TODO paddings depends of card variant
