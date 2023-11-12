import styled from "@emotion/styled"

export const Main = styled.main`
  overflow: hidden;
`

export const Section = styled.section`
  display: flex;
  gap: 96px;

  ${({ theme }) => theme.breakpoints.desktopSm} {
    gap: 40px;
  }

  ${({ theme }) => theme.breakpoints.tabletLg} {
    flex-direction: column;
  }
`
export const ScrollContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin-top: 60px;
  margin-bottom: 120px;
  text-align: center;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    margin-top: 80px;
    margin-bottom: 100px;
  }
`
