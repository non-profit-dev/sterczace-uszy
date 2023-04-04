import styled from "@emotion/styled"

export const Header = styled.header`
  max-width: 1440px;
  margin: 0 auto;
  padding-top: 140px;
  padding-bottom: 280px;
  background: url("/adoption/adoption-background.png");
  background-color: ${({ theme }) => theme.colors.gray[700]};
  background-repeat: no-repeat;
  background-size: cover;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    padding-top: 100px;
    padding-bottom: 400px;
    background-position: left bottom;
    background-size: contain;
  }

  ${({ theme }) => theme.breakpoints.tablet} {
    background-size: 140%;
    background-position-x: 100%;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    padding-top: 80px;
    padding-bottom: 280px;
  }
`

export const HeaderWrapper = styled.div`
  max-width: 456px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    max-width: 600px;
  }
`
