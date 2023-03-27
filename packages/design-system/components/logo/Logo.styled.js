import styled from "@emotion/styled"

export const Logo = styled.div`
  display: inline-block;
  width: 135px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    width: 130px;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    width: 120px;
  }
`
