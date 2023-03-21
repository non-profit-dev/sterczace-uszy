import styled from "@emotion/styled"
import { css } from "@emotion/react"

export const Card = styled.a`
  display: flex;
  text-decoration: none;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  padding-bottom: 36px;
  border-radius: 30px;
  color: ${({ theme }) => theme.colors.gray[600]};
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
  width: 100%;
  margin: 36px 10px 18px 10px;

  ${({ theme }) => theme.breakpoints.tablet} {
    display: ${({ hideIllustrationOnMobile }) =>
      hideIllustrationOnMobile ? `none` : `inline-flex`};
  }

  svg,
  img {
    height: ${({ height }) => `${height}px`};
  }
`

export const ImageContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 24px;
`

export const Image = styled.img`
  display: block;
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
  width: 100%;
  gap: 24px;
  padding: ${({ paddingTop }) =>
    paddingTop ? `36px 24px 0px 24px` : `0px 24px 0px 24px`};

  ${({ theme }) => theme.breakpoints.tablet} {
    padding: 0;
    border-radius: 0;
    padding: ${({ mobileLayout }) =>
      mobileLayout === `left` ? `0px` : `0px 24px 0px 24px`};
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: inherit;
  ${({ layout }) =>
    layout === "center"
      ? css`
          align-items: center;
          text-align: center;
        `
      : css`
          align-items: flex-start;
        `}
  gap: 24px;
  width: 100%;

  ${({ theme }) => theme.breakpoints.tablet} {
    ${({ mobileLayout }) =>
      mobileLayout === "center"
        ? css`
            align-items: center;
            text-align: center;
          `
        : css`
            align-items: flex-start;
          `}
  }
`

export const ButtonWrapper = styled.div`
  ${({ theme }) => theme.breakpoints.tablet} {
    ${({ hideButtonOnMobile }) =>
      hideButtonOnMobile
        ? css`
            display: none;
          `
        : css`
            display: block;
          `}
  }
`

export const Illustration = styled.img`
  height: 100px;
`
