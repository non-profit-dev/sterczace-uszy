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
`
export const IllustrationContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  width: 100%;
  padding: 29px 0px 0px 0px;
`
export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px;
  margin: 5px;
`
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${({ cardVersion }) =>
    cardVersion === "center" &&
    css`
      align-items: center;
    `}
  width: 100%;
  gap: 10px;
`

// TODO paddings depends of card variant
