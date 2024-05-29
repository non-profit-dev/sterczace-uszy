import styled from "@emotion/styled"

import Typography from "design-system/components/typography"

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 80px;

  ${({ theme }) => theme.breakpoints.mobile} {
    gap: 32px;
    padding-bottom: 40px;
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

export const Logo = styled.a`
  display: inline-flex;
  margin-top: 60px;

  ${({ theme }) => theme.breakpoints.mobile} {
    margin-top: 32px;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 60px;
  margin-bottom: 32px;
  gap: 80px;

  ${({ theme }) => theme.breakpoints.desktop} {
    gap: 50px;
  }

  ${({ theme }) => theme.breakpoints.tabletLg} {
    gap: 40px;
    flex-direction: column;
  }

  ${({ theme }) => theme.breakpoints.tablet} {
    margin-top: 32px;
    margin-bottom: 64px;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    margin-bottom: 32px;
    gap: 32px;
  }
`

export const MainFoundationData = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 32px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
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

  ${({ theme }) => theme.breakpoints.tabletLg} {
    width: 100%;
    gap: 20px;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
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
  display: flex;
  justify-content: flex-end;
  gap: 6px;
  margin-bottom: 24px;
`

export const SubFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 24px;

  ${({ theme }) => theme.breakpoints.mobileLg} {
    gap: 16px;
  }
`

export const SubFooterSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;

  ${({ theme }) => theme.breakpoints.mobileLg} {
    gap: 16px;
  }
`

export const SubFooterSectionRight = styled(SubFooterSection)`
  gap: 16px 8px;

  ${({ theme }) => theme.breakpoints.mobileLg} {
    gap: 16px 8px;
  }
`

export const SubFooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;

  ${({ theme }) => theme.breakpoints.mobileLg} {
    gap: 16px;
  }
`

export const CopyButton = styled.button`
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  vertical-align: middle;
  transform: translateY(-2px);
`

export const CopyInfo = styled(Typography)`
  display: inline-flex;
  min-height: 26px;
  padding-left: 4px;
  vertical-align: middle;
  align-items: center;
  transform: translateY(-2px);
`

export const BankInfo = styled.span`
  display: inline-flex;
  align-items: center;
`
