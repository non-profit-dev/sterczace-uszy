import styled from "@emotion/styled"

export const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 42px;
  ${({ theme }) => theme.breakpoints.desktopSm} {
    gap: 0px;
  }
  ${({ theme }) => theme.breakpoints.tabletLg} {
    grid-auto-flow: row;
    gap: 80px;
    max-width: 412px;
    text-align: center;
  }
  ${({ theme }) => theme.breakpoints.mobileLg} {
    gap: 60px;
  }
`
export const Description = styled.div`
  margin: 0 auto;
  width: 600px;
  ${({ theme }) => theme.breakpoints.tabletLg} {
    width: 630px;
  }
  ${({ theme }) => theme.breakpoints.mobileLg} {
    width: 100%;
  }
`
export const Achievements = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 60px;
  padding: 120px 0px;
  ${({ theme }) => theme.breakpoints.tabletLg} {
    gap: 80px;
  }
  ${({ theme }) => theme.breakpoints.mobileLg} {
    gap: 60px;
  }
`
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: cetner;
  justify-content: center;
  gap: 24px;
`
