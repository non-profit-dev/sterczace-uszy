import React from "react"
import SwiperCore, { Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { PropTypes, number } from "prop-types"
import "swiper/swiper-bundle.css"

import * as Styled from "./Slider.styled"

SwiperCore.use([Navigation, Pagination])

const Slider = ({
  children,
  slidesPerViewDesktop,
  slidesPerViewTablet,
  slidesPerViewMobile,
}) => {
  const swiperSettings = {
    navigation: true,
    pagination: { clickable: true },
    spaceBetween: 48,
    breakpoints: {
      390: {
        slidesPerView: slidesPerViewMobile,
      },
      744: {
        slidesPerView: slidesPerViewTablet,
      },
      1200: {
        slidesPerView: slidesPerViewDesktop,
      },
    },
  }
  return (
    <div>
      <Styled.Pagination>
        <Swiper {...swiperSettings}>
          {React.Children.map(children, (child) => (
            <SwiperSlide>{child}</SwiperSlide>
          ))}
        </Swiper>
      </Styled.Pagination>
    </div>
  )
}

Slider.propTypes = {
  children: PropTypes.node.isRequired,
  slidesPerViewDesktop: number.isRequired,
  slidesPerViewTablet: number.isRequired,
  slidesPerViewMobile: number.isRequired,
}

export default Slider
