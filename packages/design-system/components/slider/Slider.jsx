import React from "react"
import { Pagination } from "swiper"
import { Swiper } from "swiper/react"
import { PropTypes, number } from "prop-types"
import "swiper/swiper-bundle.css"

import * as Styled from "./Slider.styled"

import Navigation from "./Navigation"

const Slider = ({
  children,
  slidesPerViewDesktop,
  slidesPerViewTablet,
  slidesPerViewTabletLg,
  slidesPerViewMobile,
}) => {
  const paginationRef = React.useRef(null)

  const swiperSettings = {
    pagination: {
      el: paginationRef.current,
      clickable: true,
    },
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
      <Swiper
        {...swiperSettings}
        modules={[Pagination]}
        /* eslint-disable no-param-reassign */
        onBeforeInit={(swiper) => {
          swiper.params.pagination.el = paginationRef.current
          swiper.pagination.update()
        }}
      >
        {React.Children.map(children, (child, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Styled.Slide key={index}>{child}</Styled.Slide>
        ))}

        <Navigation />

        <Styled.BulletContainer ref={paginationRef} />
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
