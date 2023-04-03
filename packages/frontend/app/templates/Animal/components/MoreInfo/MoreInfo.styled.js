import styled from "@emotion/styled"

export const Section = styled.section``

export const Tabs = styled.div`
  margin-top: 40px;
`

export const Buttons = styled.div`
  display: flex;
  gap: 32px;
  margin-top: 80px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    margin-top: 40px;
  }
`
