import styled from "@emotion/styled"

export const Wrapper = styled.div`
  padding-top: 200px;
  padding-bottom: 240px;
  background: url(/free-support/hero.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;

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
  background: url("/free-support/hero-tablet.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  ${({ theme }) => theme.breakpoints.tablet} {
    display: block;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    height: 380px;
  }
`
