import styled from "@emotion/styled"
import { Swiper, SwiperSlide } from "swiper/react"

export const Wrapper = styled.div``

export const Tabs = styled(Swiper)`
  width: 100%;
  filter: ${({ transparentContent }) =>
    transparentContent
      ? "drop-shadow(2px 3px 9px rgba(0, 0, 0, 0.1))"
      : "none"};

  ${({ theme }) => theme.breakpoints.desktopSm} {
    padding: 0 44px;
  }
`

export const Content = styled.div`
  padding: ${({ transparentContent }) =>
    transparentContent ? "32px 32px 32px 8px" : "32px"};
  background: ${({ theme, transparentContent }) =>
    transparentContent ? "transparent" : theme.colors.complementary[100]};
  border: 1px solid
    ${({ theme, transparentContent }) =>
      transparentContent ? "transparent" : theme.colors.gray[300]};
  border-top: transparent;
  border-radius: 0 0 10px 10px;
`

export const Tab = styled(SwiperSlide)`
  width: 100%;
  min-width: 150px;
  height: auto;
  align-self: stretch;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 10px;
  cursor: pointer;
  white-space: nowrap;
  background: ${({ theme, active }) =>
    active ? theme.colors.complementary[100] : theme.colors.gray[100]};
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-bottom: 1px solid
    ${({ borderBottom, theme }) =>
      borderBottom ? theme.colors.gray[300] : "transparent"};
  border-right-color: transparent;

  &:first-of-type {
    border-radius: ${({ transparentContent }) =>
      transparentContent ? "10px 0 0 10px" : "10px 0 0 0"};

    ${({ theme }) => theme.breakpoints.desktopSm} {
      border-radius: 0;
    }
  }

  &:last-of-type {
    border-radius: ${({ transparentContent }) =>
      transparentContent ? "0 10px 10px 0" : "0 10px 0 0"};
    border-right-color: ${({ theme }) => theme.colors.gray[300]};

    ${({ theme }) => theme.breakpoints.desktopSm} {
      border-radius: 0;
      border-bottom: 1px solid ${({ theme }) => theme.colors.gray[300]};
    }
  }
`

export const NavButton = styled.button`
  display: none;
  position: absolute;
  top: 0;
  height: 100%;
  z-index: 1;
  justify-content: center;
  align-items: center;
  flex: 1 0 44px;
  width: 44px;
  background: ${({ theme }) => theme.colors.complementary[100]};
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  cursor: pointer;

  &:first-of-type {
    left: 0;
    border-radius: ${({ transparentContent }) =>
      transparentContent ? "10px 0 0 10px" : "10px 0 0 0"};
  }

  &:last-of-type {
    right: 0;
    border-radius: ${({ transparentContent }) =>
      transparentContent ? "0 10px 10px 0" : "0 10px 0 0"};
  }

  ${({ theme }) => theme.breakpoints.desktopSm} {
    display: flex;
  }
`
