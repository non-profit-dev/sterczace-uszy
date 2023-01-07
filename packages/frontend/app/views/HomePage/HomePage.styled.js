import styled from "@emotion/styled"
import ComingSoonImageDesktop from "frontend/public/home/images/coming-soon-desktop.png"
import ComingSoonImageMobile from "frontend/public/home/images/coming-soon-mobile.png"

export const HomePageContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  max-width: 50%;
  padding: 0 100px;

  ${({ theme }) => theme.breakpoints.xl} {
    position: relative;
    transform: translateY(0);
    max-width: 100%;
    padding: 120px 90px 0;
  }
  s ${({ theme }) => theme.breakpoints.sm} {
    padding: 48px 16px 0;
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

  ${({ theme }) => theme.breakpoints.sm} {
    background-image: url(${ComingSoonImageMobile.src});
    background-position: bottom;
    background-size: 70%;
  }
`

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  gap: 5px;
  ${({ theme }) => theme.breakpoints.sm} {
    margin-top: 20px;
  }
`
