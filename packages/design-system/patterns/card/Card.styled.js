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
  border-radius: 30px;
  color: ${({ theme }) => theme.colors.gray[600]};
  ${({ href, theme }) =>
    href &&
    css`
      box-shadow: 2px 2px 9px 0px rgba(0, 0, 0, 0.1);
      transition: 300ms linear;
      cursor: pointer;
      background: ${theme.colors.neutrals[100]};
    `}

  :hover {
    ${({ href }) =>
      href &&
      css`
        box-shadow: 2px 2px 30px 0px rgba(0, 0, 0, 0.2);
      `}
  }
`
export const Illustration = styled.div`
  width: auto;
  height: ${({ size }) => (size === "small" ? "100px" : "217px")};
`

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 314px;
  object-fit: cover;
  border-radius: 30px 30px 0px 0px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  gap: 24px;
  padding: 24px 24px 36px;
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
  width: 100%;
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
          text-align: left;
        `}
  gap: 24px;
  width: 100%;
`

export const Title = styled.div`
  width: 100%;
`
