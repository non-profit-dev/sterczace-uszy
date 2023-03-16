import styled from "@emotion/styled"

import ContainerComponent from "design-system/components/container"

export const Container = styled(ContainerComponent)`
  ${({ theme }) => theme.breakpoints.tabletLg} {
    background: linear-gradient(
        132.47deg,
        #ffffff -6.92%,
        rgba(255, 255, 255, 0.741134) 59.95%,
        rgba(255, 255, 255, 0.477001) 80.64%,
        rgba(255, 255, 255, 0) 112.9%
      ),
      url("/home/about-section-image.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`

export const Content = styled.div`
  max-width: 1065px;
  margin: 105px auto 120px;
  display: grid;
  gap: 80px;
  grid-template-columns: auto 1fr;

  ${({ theme }) => theme.breakpoints.desktopSm} {
    gap: 50px;
  }

  ${({ theme }) => theme.breakpoints.tablet} {
   padding: 60px 0;
  }

  ${({ theme }) => theme.breakpoints.tabletLg} {
    display: block;
    max-width: 620px;
    margin: 0;
    padding-top: 100px;
    padding-bottom: 100px;
  }
`

export const Image = styled.img`
  max-width: 425px;
  width: 100%;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    display: none;
  }
`
