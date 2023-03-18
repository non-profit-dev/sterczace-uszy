import styled from "@emotion/styled"

import ContainerComponent from "design-system/components/container"
import CardComponent from "design-system/patterns/card"

export const Container = styled(ContainerComponent)`
  background-image: url("/home/hero-background.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position-x: 90%;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    background-size: 50%;
    background-position: center;
  }
`

export const Hero = styled.header`
  margin-bottom: 180px;
  background-color: ${({ theme }) => theme.colors.grey[700]};

  ${({ theme }) => theme.breakpoints.tabletLg} {
    margin-bottom: 0;
  }
`

export const Content = styled.div`
  max-width: 580px;
  padding-top: 70px;
  padding-left: 70px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    padding-left: 0px;
    padding-bottom: 260px;
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
    bottom: auto;
    margin-top: 0;
    grid-auto-flow: row;
    gap: 0;
    width: 100vw;
    left: 50%;
    transform: translateX(-50%);
  }
`

export const Card = styled(CardComponent)`
  ${({ theme }) => theme.breakpoints.tabletLg} {
    border-radius: 0;
    box-shadow: none;
    border-top: 1px solid ${({ theme }) => theme.colors.grey[200]};
    padding-top: 30px;
  }
`
