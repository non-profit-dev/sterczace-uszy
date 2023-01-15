import styled from "@emotion/styled"

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${({ theme }) => theme.breakpoints.sm} {
    gap: 32px;
  }

  &:before {
    content: "";
    width: 100%;
    height: 5px;
    clip-path: ${({ size }) =>
      `ellipse(50% ${size === `large` ? `3px` : `2px`})`};
    background: ${({ theme }) => theme.colors.primary[500]};
  }
`

export const Logo = styled.div`
  display: inline-flex;
  padding-top: 60px;

  ${({ theme }) => theme.breakpoints.sm} {
    padding-top: 20px;
  }
`

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 80px;
  padding-top: 60px;
  padding-bottom: 50px;

  ${({ theme }) => theme.breakpoints.xl} {
    gap: 40px;
    padding-top: 32px;
  }

  ${({ theme }) => theme.breakpoints.lg} {
    flex-direction: column;
  }

  ${({ theme }) => theme.breakpoints.sm} {
    gap: 32px;
    padding-bottom: 40px;
  }
`

export const MainData = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 32px;

  ${({ theme }) => theme.breakpoints.lg} {
    flex-direction: row;
    justify-content: space-between;
  }

  ${({ theme }) => theme.breakpoints.sm} {
    flex-direction: column;
    justify-content: flex-start;
  }
`

export const Sections = styled.div`
  display: flex;
  flex: 2;
  flex-direction: row;
  justify-content: space-between;

  ${({ theme }) => theme.breakpoints.sm} {
    flex-direction: column;
    gap: 24px;
  }
`
export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const IconsContainer = styled.div`
  display: inline-flex;
  ${({ theme }) => theme.breakpoints.sm} {
    display: none;
  }
`
export const IconsContainerMobile = styled.div`
  display: none;
  ${({ theme }) => theme.breakpoints.sm} {
    display: inline-flex;
  }
`

export const CopyrightWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
