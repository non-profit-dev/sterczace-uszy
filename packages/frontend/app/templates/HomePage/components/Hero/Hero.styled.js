import styled from "@emotion/styled"

import ContainerComponent from "design-system/components/container"

export const Container = styled(ContainerComponent)`
  background-image: url("/home/hero-background.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;
`

export const Hero = styled.header`
  background-color: ${({ theme }) => theme.colors.grey[700]};
`

export const Content = styled.div`
  max-width: 520px;
  padding-top: 70px;
  padding-bottom: 200px;
  padding-left: 70px;

  ${({ theme }) => theme.breakpoints.tablet} {
    padding-left: 0px;
  }
`
