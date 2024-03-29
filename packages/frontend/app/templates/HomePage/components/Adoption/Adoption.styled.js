import styled from "@emotion/styled"

import ContainerComponent from "design-system/components/container"

export const Container = styled(ContainerComponent)`
  margin: 80px auto;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    margin: 120px auto 80px auto;
  }
  ${({ theme }) => theme.breakpoints.mobileLg} {
    margin: 90px auto;
  }
`

export const TextContainer = styled.div`
  max-width: 730px;
  margin: 0px auto;
`

export const RulesContainer = styled.div`
  align-items: center;
  padding-top: 30px;
  margin: 0 auto;
  display: flex;
  ${({ theme }) => theme.breakpoints.tabletLg} {
    flex-direction: column;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px auto;
`
