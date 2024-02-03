import styled from "@emotion/styled"
import { Swiper, SwiperSlide } from "swiper/react"

export const Slide = styled(SwiperSlide)`
  align-self: stretch;
  height: auto;
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
    display: none;
  }
`

export const BulletContainer = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  gap: 22px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    display: none;
  }
`

export const Slider = styled(Swiper)`
  position: relative;
  padding: 30px 40px;
`

export const Bullet = styled.div`
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  cursor: pointer;
`
