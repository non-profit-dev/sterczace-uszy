import styled from "@emotion/styled"

export const Section = styled.section`
  display: grid;
  grid-template-columns: 50% 40%;
  gap: 96px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    grid-template-columns: auto;
    gap: 40px;
  }
`

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
  max-width: 580px;
  padding-top: 70px;
  padding-left: 70px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    padding-left: 0px;
    padding-bottom: 260px;
    margin: 0 auto;
  }
`
