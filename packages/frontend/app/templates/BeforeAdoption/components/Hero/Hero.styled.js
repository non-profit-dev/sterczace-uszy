import styled from "@emotion/styled"

export const Header = styled.header`
  margin: 0 auto;
  padding: 260px 0;
  background: url("/before-adoption/hero-background.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  ${({ theme }) => theme.breakpoints.tablet} {
    padding: 0;
    background: ${({ theme }) => theme.colors.complementary[100]};
  }
`

export const HeaderWrapper = styled.div`
  max-width: 560px;

  ${({ theme }) => theme.breakpoints.tablet} {
    padding: 100px 0;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    padding: 60px 0;
  }
`

export const HeroMobileBackground = styled.div`
  display: none;
  height: 400px;
  background: url("/before-adoption/hero-background-mobile.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  ${({ theme }) => theme.breakpoints.tablet} {
    display: block;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    height: 200px;
  }
`
