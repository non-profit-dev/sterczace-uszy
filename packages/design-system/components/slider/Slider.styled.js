import styled from "@emotion/styled"

import { SwiperSlide } from "swiper/react"

export const Slide = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
`

export const Arrow = styled.div`
  position: absolute;
  top: 50%;
  left: ${({ direction }) => (direction === "prev" ? "0" : "auto")};
  right: ${({ direction }) => (direction === "next" ? "0" : "auto")};
  transform: translateY(-50%);
  z-index: 100;
  cursor: pointer;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    top: auto;
    bottom: 0;
    transform: translateY(0);
  }
`

export const BulletContainer = styled.div`
  display: none;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
    margin-bottom: 12px;
  }
`

export const Slider = styled.div`
  position: relative;
`
