import styled from "@emotion/styled"

export const Header = styled.header`
  margin: 0 auto;
  padding-top: 120px;
  padding-bottom: 400px;
  background: url("/financial-data/financial-data-background.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  ${({ theme }) => theme.breakpoints.tablet} {
    padding: 0;
    background: ${({ theme }) => theme.colors.complementary[100]};
  }
  ${({ theme }) => theme.breakpoints.mobileLg} {
    padding-top: 20px;
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
  background: url("/financial-data/financial-data-background-mobile.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  ${({ theme }) => theme.breakpoints.tablet} {
    height: 384px;
    display: block;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    height: 201px;
  }
`
