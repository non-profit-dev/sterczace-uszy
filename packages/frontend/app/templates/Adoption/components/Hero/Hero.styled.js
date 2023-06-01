import styled from "@emotion/styled"

export const Header = styled.header`
  margin: 0 auto;
  padding-top: 140px;
  padding-bottom: 280px;
  background: url("/adoption/adoption-background.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  ${({ theme }) => theme.breakpoints.tablet} {
    padding: 0;
    background: ${({ theme }) => theme.colors.complementary[100]};
  }
`

export const HeaderWrapper = styled.div`
  max-width: 456px;

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
  background: url("/adoption/adoption-background-mobile.png");
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
