import styled from "@emotion/styled"

import Typography from "design-system/components/typography"
import ContainerComponent from "design-system/components/container"

export const Container = styled(ContainerComponent)`
  position: sticky;
  top: 0;
  z-index: 1;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    padding: 0;
  }
`

export const Nav = styled.ul`
  margin-top: 120px;
  margin-bottom: 120px;
  list-style: none;
  padding: 0;
  display: flex;
  text-align: center;
  filter: drop-shadow(2px 3px 9px rgba(0, 0, 0, 0.1));

  ${({ theme }) => theme.breakpoints.tabletLg} {
    margin-top: 100px;
    margin-bottom: 100px;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    margin-top: 60px;
    margin-bottom: 60px;
  }
`

export const Item = styled.li`
  padding: 10px 20px;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.complementary[100]};
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};

  ${({ theme }) => theme.breakpoints.mobileLg} {
    padding: 8px;
    flex: auto;
  }

  &:first-of-type {
    border-radius: 10px 0 0 10px;

    ${({ theme }) => theme.breakpoints.tabletLg} {
      border-radius: 0;
    }
  }

  &:last-of-type {
    border-radius: 0 10px 10px 0;

    ${({ theme }) => theme.breakpoints.tabletLg} {
      border-radius: 0;
    }
  }
`

export const Link = styled(Typography)`
  display: block;
  text-decoration: none;
`
