import styled from "@emotion/styled"

export const Main = styled.main`
  overflow: hidden;
`

export const Banner = styled.div`
  ${({ theme }) => theme.breakpoints.tabletLg} {
    display: none;
  }
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
