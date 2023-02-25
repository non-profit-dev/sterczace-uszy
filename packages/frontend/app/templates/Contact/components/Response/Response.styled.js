import styled from "@emotion/styled"
import Link from "next/link"

export const ResponseContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  padding: 72px;
  align-items: flex-start;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    padding: 0;
  }
`

export const NavLink = styled(Link)`
  text-decoration: none;
`
