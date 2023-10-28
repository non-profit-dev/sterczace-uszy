import Icon from "design-system/components/icon"
import Accordion from "design-system/components/accordion"
import Button from "design-system/components/button"
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

export const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: ${({ theme }) => theme.colors.neutrals[100]};
  z-index: 1;
  min-width: 205px;
  padding: 16px;
  display: block;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    display: none;
  }
`

export const ChevronIcon = styled(Icon)`
  transform: ${(props) => (props.isActive ? "rotate(180deg)" : "")};
  transition: 400ms ease;
`

export const DropdownButton = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    display: none;
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
  position: relative;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    display: none;
  }
`

export const MenuButton = styled.div`
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
  padding: 20px;
  background: ${({ theme }) => theme.colors.neutrals[200]};

  ${({ theme }) => theme.breakpoints.tabletLg} {
    display: block;
    max-width: unset;
    padding: 24px 60px;
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
export const NavigationAccordion = styled(Accordion)`
  background: ${({ theme }) => theme.colors.neutrals[200]};
`

export const AccordionButton = styled(Button)`
  ${({ theme }) => theme.breakpoints.tabletLg} {
    padding: 20px 0;
  }
`

export const AccordionLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  a span {
    font-weight: 400;
  }
`
