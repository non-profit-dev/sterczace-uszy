import styled from "@emotion/styled"

export const Feature = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Tabs = styled.div`
  margin-top: 40px;
`

export const Content = styled.div`
  width: 40%;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    width: 100%;
  }
`
