import styled from "@emotion/styled"
import { css } from "@emotion/react"

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
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

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-content: space-around;
  ${({ theme }) => theme.breakpoints.xl} {
    flex-direction: row;
  }
  ${({ theme }) => theme.breakpoints.sm} {
    flex-direction: column;
  }
  flex-wrap: wrap;
  gap: 24px;
  ${({ theme }) => theme.breakpoints.xl} {
    margin: 74 110 84 110;
  }
  ${({ theme }) => theme.breakpoints.md} {
    padding: 100px auto 0 0;
  }
  ${({ theme }) => theme.breakpoints.sm} {
    padding: 20px auto 0 0;
  }
  border: 1px solid;
`

export const Wrapper = styled.div`
  display: flex;
  ${({ theme }) => theme.breakpoints.xl} {
    flex-direction: column;
  }
  ${({ theme }) => theme.breakpoints.lg} {
    flex-direction: row;
  }
  ${({ theme }) => theme.breakpoints.sm} {
    flex-direction: column;
  }
`

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 60px;

  color: "blue";
  gap: 24px;
  border: 1px solid;
`
export const LinkWrapper = styled.a`
  display: flex;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.grey[600]};
`
export const IconsContainer = styled.div`
  display: inline-flex;
  border: 1px solid;
`
export const CopyrightWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
