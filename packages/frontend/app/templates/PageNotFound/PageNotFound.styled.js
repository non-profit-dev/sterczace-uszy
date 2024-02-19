import styled from "@emotion/styled"

export const Wrapper = styled.div`
  background: url("/page-not-found/page-not-found-background.png");
  background-size: cover;
  background-position: center;
  padding: 120px 0px;
  height: 100vh;
  width: 100%;

  ${({ theme }) => theme.breakpoints.desktopSm} {
    padding: 120px 50px;
  }

  ${({ theme }) => theme.breakpoints.tabletLg} {
    background: url("/page-not-found/page-not-found-background-tablet.png");
    background-size: cover;
    background-position: center;
    padding: 60px 0 100px 0;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    background: url("/page-not-found/page-not-found-background-mobile.png");
    background-size: cover;
    background-position: center;
    padding: 60px 0 60px 0;
  }
`
