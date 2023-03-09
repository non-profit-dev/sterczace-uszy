import styled from "@emotion/styled"

import ContainerComponent from "design-system/components/container"

export const Container = styled(ContainerComponent)`
  background-image: url("/home/hero-background.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;
`

export const Hero = styled.header`
  margin-bottom: 80px;
  background-color: ${({ theme }) => theme.colors.grey[700]};
`

export const Content = styled.div`
  max-width: 520px;
  padding-top: 70px;
  padding-bottom: 40px;
  padding-left: 70px;

  ${({ theme }) => theme.breakpoints.tablet} {
    padding-left: 0px;
  }
`

export const Cards = styled.div`
  position: relative;
  bottom: -80px;
  max-width: 1062px;
  margin: 0 auto;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  gap: 40px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    grid-auto-flow: row;
    gap: 0;
  }
`
