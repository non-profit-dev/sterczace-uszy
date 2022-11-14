import styled from "@emotion/styled"
import { css } from "@emotion/react"

export const Card = styled.a`
  display: flex;
  box-sizing: border-box;
  text-decoration: none;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  padding-bottom: 36px;
  border-radius: 30px;
  color: ${({ theme }) => theme.colors.grey[600]};
  background-color: ${({ bgColor = "transparent" }) => bgColor};
  ${({ linkStyle }) =>
    linkStyle &&
    css`
      box-shadow: 2px 2px 9px 0px rgba(0, 0, 0, 0.1);
      transition: 500ms linear;
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
  height: ${({ imageHeight }) => imageHeight};
  object-fit: cover;
  border-radius: 30px 30px 0px 0px;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  color: inherit;
  ${({ layout }) =>
    layout === "center"
      ? css`
          align-items: center;
        `
      : css`
          align-items: flex-start;
        `}
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  gap: 24px;
  padding: ${({ paddingTop }) =>
    paddingTop ? `36px 24px 0px 24px` : `0px 24px 0px 24px`};
`
export const ChildrenWrapper = styled.div`
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
  gap: 24px;
  box-sizing: border-box;
  width: 100%;
`
