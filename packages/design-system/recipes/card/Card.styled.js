import styled from "@emotion/styled"
import { css } from "@emotion/react"

export const Card = styled.a`
  display: flex;
  box-sizing: border-box;
  text-decoration: none;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 36px;
  border-radius: 30px;
  background-color: ${({ bgColor = "transparent" }) => bgColor};
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  ${({ linkStyle }) =>
    linkStyle &&
    css`
      box-shadow: 2px 2px 9px 0px rgba(0, 0, 0, 0.1);
      cursor: pointer;
    `}

  :hover {
    ${({ linkStyle }) =>
      linkStyle &&
      css`
        box-shadow: 2px 2px 53px 0px rgba(0, 0, 0, 0.3);
      `}
  }
`
export const IllustrationContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  margin: 36px 10px 18px 10px;
`
export const ImageContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
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
  color: inherit;
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
  gap: 24px;
  padding: ${({ paddingTop }) =>
    paddingTop ? `36px 24px 0px 24px` : `0px 24px 0px 24px`};
`
