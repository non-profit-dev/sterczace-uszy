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
  margin-top: 60px;
  ${({ theme }) => theme.breakpoints.xl} {
    margin: 60px 30px 0px 30px;
  }
  ${({ theme }) => theme.breakpoints.lg} {
    margin: 60px 45px 0px 45px;
  }

  ${({ theme }) => theme.breakpoints.md} {
    margin: 60px 20px 0px 20px;
  }

  ${({ theme }) => theme.breakpoints.sm} {
    margin: 32px 24px 0px 24px;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 60px auto 32px auto;
  gap: 80px;
  ${({ theme }) => theme.breakpoints.xl} {
    margin: 60px 30px 32px 30px;
    gap: 50px;
  }

  ${({ theme }) => theme.breakpoints.lg} {
    gap: 40px;
    margin: 32px 45px 64px 45px;
    flex-direction: column;
  }
  ${({ theme }) => theme.breakpoints.md} {
    gap: 40px;
    margin: 32px 20px 64px 20px;
  }
  ${({ theme }) => theme.breakpoints.sm} {
    margin: 32px 24px 32px 24px;
    gap: 32px;
  }
`

export const MainFoundationData = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 32px;

  ${({ theme }) => theme.breakpoints.lg} {
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;
  }
  ${({ theme }) => theme.breakpoints.sm} {
    flex-direction: column;
    justify-content: flex-start;
    gap: 32px;
  }
`

export const Sections = styled.div`
  display: flex;
  flex: 2;
  flex-direction: row;
  gap: 20px;
  justify-content: space-between;
  ${({ theme }) => theme.breakpoints.lg} {
    width: 100%;
    gap: 20px;
  }

  ${({ theme }) => theme.breakpoints.sm} {
    flex-direction: column;
    gap: 32px;
  }
`
export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const Icons = styled.div`
  display: inline-flex;
  ${({ theme }) => theme.breakpoints.sm} {
    display: none;
  }
`
export const IconsMobile = styled.div`
  display: none;
  ${({ theme }) => theme.breakpoints.sm} {
    display: inline-flex;
  }
`

export const Copyright = styled.div`
  display: flex;
  justify-content: space-between;
  ${({ theme }) => theme.breakpoints.xl} {
    margin: 0px 30px;
  }
  ${({ theme }) => theme.breakpoints.lg} {
    margin: 0px 45px;
  }
  ${({ theme }) => theme.breakpoints.md} {
    margin: 0px 20px;
  }

  ${({ theme }) => theme.breakpoints.sm} {
    margin: 0px 24px;
  }
`