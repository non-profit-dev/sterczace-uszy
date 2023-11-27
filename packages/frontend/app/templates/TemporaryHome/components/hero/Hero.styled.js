import styled from "@emotion/styled"

export const Wrapper = styled.div`
  padding-top: 140px;
  padding-bottom: 280px;
  background:
    linear-gradient(
      90deg,
      #fff 18.37%,
      rgba(255, 255, 255, 0.52) 45.81%,
      rgba(255, 255, 255, 0) 97.88%
    ),
    url(/temporary-home/hero-background.png),
    lightgray 298.297px -869.73px / 97.869% 260.318% no-repeat;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  ${({ theme }) => theme.breakpoints.tablet} {
    padding: 0;
    background: ${({ theme }) => theme.colors.complementary[100]};
  }
`

export const HeaderWrapper = styled.div`
  max-width: 552px;
  ${({ theme }) => theme.breakpoints.tablet} {
    padding: 100px 0;
  }
  ${({ theme }) => theme.breakpoints.mobileLg} {
    padding: 60px 0 40px 0;
  }
`
export const HeroMobileBackground = styled.div`
  display: none;
  height: 560px;
  background: url("/temporary-home/hero-background-tablet.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  ${({ theme }) => theme.breakpoints.tablet} {
    display: block;
  }
  ${({ theme }) => theme.breakpoints.mobileLg} {
    height: 354px;
  }
`
