import styled from "@emotion/styled"

export const Main = styled.main`
  overflow: hidden;
`

export const Banner = styled.div`
  ${({ theme }) => theme.breakpoints.tabletLg} {
    display: none;
  }
`
