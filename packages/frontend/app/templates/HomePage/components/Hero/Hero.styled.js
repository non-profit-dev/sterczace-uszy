import styled from "@emotion/styled"

import ContainerComponent from "design-system/components/container"

export const Container = styled(ContainerComponent)`
  background-image: url("/home/hero-background.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position-x: 90%;
`

export const Hero = styled.header`
  margin-bottom: 180px;
  background-color: ${({ theme }) => theme.colors.grey[700]};
`

export const Content = styled.div`
  max-width: 580px;
  padding-top: 70px;
  padding-left: 70px;

  ${({ theme }) => theme.breakpoints.tablet} {
    padding-left: 0px;
  }
`

export const Cards = styled.div`
  position: relative;
  bottom: -180px;
  max-width: 1062px;
  margin: 0 auto;
  margin-top: -80px;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  gap: 40px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    grid-auto-flow: row;
    gap: 0;
  }
`
