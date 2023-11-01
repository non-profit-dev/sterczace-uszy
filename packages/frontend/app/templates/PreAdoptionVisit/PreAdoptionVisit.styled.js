import styled from "@emotion/styled"

export const Banner = styled.div`
  ${({ theme }) => theme.breakpoints.tabletLg} {
    display: none;
  }
`
