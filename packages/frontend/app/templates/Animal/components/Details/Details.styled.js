import styled from "@emotion/styled"

export const Feature = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  text-align: end;
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
