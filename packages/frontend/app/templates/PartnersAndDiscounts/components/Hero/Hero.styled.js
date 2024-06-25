import styled from "@emotion/styled"

import ContainerComponent from "design-system/components/container"

export const Container = styled(ContainerComponent)`
  background-image: url("/home/hero-background.png");
  background-repeat: no-repeat;
  background-size: contain;
`

export const Hero = styled.header`
  background-color: ${({ theme }) => theme.colors.gray[700]};
`

export const Content = styled.div`
  max-width: 580px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    margin: 0 auto;
  }
`
