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
    top: auto;
    transform: translateY(0);
    bottom: 0;
    margin-bottom: -10px;
  }
`

export const BulletContainer = styled.div`
  ${({ theme }) => theme.breakpoints.tabletLg} {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    gap: 22px;
  }
`

export const Slider = styled(Swiper)`
  position: relative;
  padding: 30px 40px;

  ${({ theme }) => theme.breakpoints.tabletLg} {
    padding: 30px 56px 60px;
  }

  ${({ theme }) => theme.breakpoints.mobileLg} {
    padding: 30px 24px 60px;
  }
`

export const Bullet = styled.div`
  ${({ theme }) => theme.breakpoints.tabletLg} {
    display: block;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: ${({ color }) => color};
    cursor: pointer;
  }
`
