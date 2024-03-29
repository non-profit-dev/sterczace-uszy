import styled from "@emotion/styled"

export const Section = styled.section``

export const Tabs = styled.div`
  margin-top: 56px;
`

export const Buttons = styled.div`
  display: flex;
  gap: 32px;
  margin-top: 80px;
  margin-bottom: 80px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    margin-top: 40px;
    margin-bottom: 40px;
    gap: 18px;
  }
`
