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
export const Achievements = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 60px;
  padding: 120px 20px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    gap: 80px;
    padding: 100px 56px;
  }
  ${({ theme }) => theme.breakpoints.mobileLg} {
    gap: 60px;
    padding: 60px 24px;
  }
  ${({ theme }) => theme.breakpoints.mobileSm} {
    padding: 60px 14px;
  }
`
