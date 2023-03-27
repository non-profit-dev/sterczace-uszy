import styled from "@emotion/styled"

export const MainContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 42px;

  ${({ theme }) => theme.breakpoints.desktopSm} {
    gap: 0px;
  }
  ${({ theme }) => theme.breakpoints.tabletLg} {
    grid-auto-flow: row;
    gap: 80px;
  }
  ${({ theme }) => theme.breakpoints.mobileLg} {
    gap: 60px;
  }
`
export const Description = styled.div`
  display: inline-flex;
  margin: 0 auto;
  max-width: 600px;

  ${({ theme }) => theme.breakpoints.mobileLg} {
    max-width: 100%;
  }
`
export const Achievements = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 60px;
  padding: 60px 0px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    gap: 80px;
  }
  ${({ theme }) => theme.breakpoints.mobileLg} {
    gap: 60px;
  }
`
