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
    transform: translateY(0);
    bottom: 0;
    margin-bottom: -10px;
  }
`

export const BulletContainer = styled.div`
${({ theme }) => theme.breakpoints.tabletLg} {
    display: flex;
    justify-content:center;
    gap: 22px;
  }
}
`

export const Slider = styled.div`
  position: relative;
`
export const Bullet = styled.div`
  ${({ theme }) => theme.breakpoints.tablet} {
    display: block;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: ${({ color }) => color};
    cursor: pointer;
  }
`
