import styled from "@emotion/styled"

export const Header = styled.header`
  max-width: 1440px;
  margin: 0 auto;
  padding-top: 140px;
  padding-bottom: 280px;
  background: url("/adoption/adoption-background.png");
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
  max-width: 456px;
`
