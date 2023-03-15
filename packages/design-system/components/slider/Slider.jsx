import React from "react"
import { Swiper } from "swiper/react"

import { PropTypes, number } from "prop-types"
import "swiper/swiper-bundle.css"

import * as Styled from "./Slider.styled"

import Navigation from "./Navigation"
import Pagination from "./Pagination"

const Slider = ({
  children,
  slidesPerViewDesktop,
  slidesPerViewTablet,
  slidesPerViewTabletLg,
  slidesPerViewMobile,
}) => {
  const swiperSettings = {
    breakpoints: {
      390: {
        slidesPerView: slidesPerViewMobile,
      },
      587: {
        slidesPerView: slidesPerViewTablet,
      },
      744: {
        slidesPerView: slidesPerViewTabletLg,
      },
      922: {
        slidesPerView: slidesPerViewDesktop,
      },
    },
  }

  return (
    <Styled.Slider>
      <Swiper {...swiperSettings}>
        {React.Children.map(children, (child, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Styled.Slide key={index}>{child}</Styled.Slide>
        ))}
        <Navigation />
        <Pagination />
      </Swiper>
    </Styled.Slider>
  )
}

Slider.propTypes = {
  children: PropTypes.node.isRequired,
  slidesPerViewDesktop: number,
  slidesPerViewTablet: number,
  slidesPerViewTabletLg: number,
  slidesPerViewMobile: number,
}

Slider.defaultProps = {
  slidesPerViewDesktop: 3,
  slidesPerViewTablet: 1.5,
  slidesPerViewTabletLg: 2,
  slidesPerViewMobile: 1,
}

export default Slider
