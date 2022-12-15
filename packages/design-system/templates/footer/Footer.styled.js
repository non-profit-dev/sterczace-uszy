import styled from "@emotion/styled"
import { css } from "@emotion/react"

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: "red";
  gap: 24px;
  width: 100%;

  &:before {
    content: "";
    width: 100%;
    height: 5px;
    clip-path: ${({ size }) =>
      `ellipse(50% ${size === `large` ? `3px` : `2px`})`};
    background: ${({ theme }) => theme.colors.primary[500]};
  }
`

export const LogoContainer = styled.div`
  display: inline-flex;
`

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: ${({ direction = "column" }) => direction};
  ${({ layout }) =>
    layout === "stretch"
      ? css`
          align-items: stretch;
        `
      : css`
          align-items: flex-start;
        `}

  color: "blue";
  gap: 24px;
  width: 100%;
  ${"" /* border: 1px solid; */}
`
export const LinkWrapper = styled.a`
  display: flex;
  cursor: pointer;
  text-decoration: none;
  margin: 10px;
`
