import styled from "@emotion/styled"
import ComingSoonImageDesktop from "frontend/public/home/images/coming-soon-desktop.png"
import ComingSoonImageMobile from "frontend/public/home/images/coming-soon-mobile.png"

export const HomePageContainer = styled.div`
  position: relative;
  max-width: 50%;
  padding: 350px 0 0 100px;

  ${({ theme }) => theme.breakpoints.xl} {
    padding: 10px;
    margin: 0 auto;
    max-width: 100%;
  }
  ${({ theme }) => theme.breakpoints.md} {
    padding: 100px auto 0 0;
  }
  ${({ theme }) => theme.breakpoints.sm} {
    padding: 20px auto 0 0;
  }
`
export const Background = styled.div`
  background-image: url(${ComingSoonImageDesktop.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.grey[600]};

  ${({ theme }) => theme.breakpoints.xl} {
    background-image: url(${ComingSoonImageMobile.src});
    background-position: bottom;
    background-size: contain;
  }
`

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  gap: 5px;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 36%;
    width: 30%;
    height: 5px;
    clip-path: ${({ size }) =>
      `ellipse(50% ${size === `large` ? `3px` : `2px`})`};
    background: ${({ theme }) => theme.colors.primary[500]};
  }
`
