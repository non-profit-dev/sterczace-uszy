import styled from "@emotion/styled"

export const Header = styled.header`
  margin: 0 auto;
  padding-top: 140px;
  padding-bottom: 280px;
  background: url("/adoption/international-adoption/hero-background.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  ${({ theme }) => theme.breakpoints.tablet} {
    padding: 0;
    background: none;
  }
`

export const HeaderWrapper = styled.div`
  max-width: 548px;
  ${({ theme }) => theme.breakpoints.tablet} {
    padding: 100px 0;
  }
  ${({ theme }) => theme.breakpoints.mobileLg} {
    padding: 60px 0;
  }
`

export const HeroMobileBackground = styled.div`
  display: none;
  height: 560px;
  background: url("/adoption/international-adoption/hero-background-tablet.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  ${({ theme }) => theme.breakpoints.tablet} {
    display: block;
  }
  ${({ theme }) => theme.breakpoints.mobileLg} {
    background-image: url("/adoption/international-adoption/hero-background-mobile.png");
    height: 380px;
  }
`
