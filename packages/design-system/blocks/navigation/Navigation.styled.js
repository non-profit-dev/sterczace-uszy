import styled from "@emotion/styled"

export const Navigation = styled.nav`
  position: relative;
  width: 100%;
  background: ${({ theme }) => theme.colors.neutrals[100]};
  padding: 28px 0;

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
  margin: 0;
  list-style: none;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    display: none;
  }
`

export const MenuButton = styled.li`
  position: relative;
`

export const Dropdown = styled.div`
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  min-width: 280px;
  padding: 20px;
  background: ${({ theme }) => theme.colors.neutrals[100]};
  border-radius: 4px;
`

export const MenuIcon = styled.button`
  display: none;
  background: transparent;
  border: none;
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
  background: ${({ theme }) => theme.colors.grey[600]};

  ${({ theme }) => theme.breakpoints.tabletLg} {
    display: block;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    padding: 40px 30px;
  }
`
