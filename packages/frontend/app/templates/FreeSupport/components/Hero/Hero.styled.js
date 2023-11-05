import styled from "@emotion/styled"

export const Wrapper = styled.div`
  padding-top: 140px;
  padding-bottom: 280px;
  background: linear-gradient(
      52deg,
      rgb(97 97 97 / 51%) 34.13%,
      rgba(0, 0, 0, 0) 50.9%
    ),
    url(/free-support/hero.png);
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
