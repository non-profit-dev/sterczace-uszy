import styled from "@emotion/styled"

export const Header = styled.header`
  margin: 0 auto;
  padding-top: 140px;
  padding-bottom: 140px;
  background:
    linear-gradient(
      272deg,
      #fff -89.05%,
      #faf4f4 3.8%,
      rgba(250, 244, 244, 0.8) 27.64%,
      rgba(250, 244, 244, 0.69) 45.47%,
      rgba(250, 244, 244, 0.69) 64.74%,
      rgba(250, 244, 244, 0.69) 79.19%,
      rgba(250, 244, 244, 0.65) 99.49%,
      rgba(255, 255, 255, 0) 124.2%
    ),
    url("/home-found/home-found-hero.png"),
    lightgray 0px -901.5px / 100% 409.091% no-repeat;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  ${({ theme }) => theme.breakpoints.tablet} {
    padding: 0;
  }
  ${({ theme }) => theme.breakpoints.mobile} {
    padding: 0;
    background:
      linear-gradient(
        272deg,
        #fff -89.05%,
        #faf4f4 3.8%,
        rgba(250, 244, 244, 0.8) 27.64%,
        rgba(250, 244, 244, 0.69) 45.47%,
        rgba(250, 244, 244, 0.69) 64.74%,
        rgba(250, 244, 244, 0.69) 79.19%,
        rgba(250, 244, 244, 0.65) 99.49%,
        rgba(255, 255, 255, 0) 124.2%
      ),
      url("/home-found/home-found-hero-mobile.png"),
      lightgray 0px -901.5px / 100% 409.091% no-repeat;

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`

export const HeaderWrapper = styled.div`
  max-width: 848px;

  ${({ theme }) => theme.breakpoints.tablet} {
    padding: 60px 0;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    padding: 60px 0;
  }
`
