import styled from "@emotion/styled"

export const Wrapper = styled.div`
  padding-top: 140px;
  padding-bottom: 280px;
  background: url("/support/support-page-background.png");
  background-repeat: no-repeat;
  background-size: cover;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    padding-top: 280px;
    padding-bottom: 120px;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    padding-top: 80px;
    padding-bottom: 280;
  }
`

export const HeaderWrapper = styled.div`
  max-width: 820px;
`
