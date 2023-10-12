import styled from "@emotion/styled"

export const Navigation = styled.nav`
  position: sticky;
  top: 0;
  z-index: 2;
  width: 100%;
  background: ${({ theme }) => theme.colors.neutrals[100]};
  padding: 28px 0;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    background: ${({ theme }) => theme.colors.neutrals[200]};
  }

  ${({ theme }) => theme.breakpoints.tablet} {
    padding: 14px 0;
  }
`

export const NavigationRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Menu = styled.ul`
  display: flex;
  gap: 48px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    display: none;
  }
`

export const MenuButton = styled.li`
  position: relative;
`

export const MenuIcon = styled.button`
  display: none;
  cursor: pointer;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    display: inline-flex;
  }
`

export const MobileNavigation = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  right: 0;
  width: 100%;
  max-width: 480px;
  padding: 40px 60px;
  background: ${({ theme }) => theme.colors.neutrals[200]};

  ${({ theme }) => theme.breakpoints.tabletLg} {
    display: block;
    max-width: unset;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    padding: 40px 30px;
  }
`

export const Overlay = styled.div`
  display: none;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.gray[700]};
  opacity: 0.2;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    display: block;
  }
`
