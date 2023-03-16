import { useState, Children } from "react"
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
  const [activeIndex, setActiveIndex] = useState(0)

  const swiperSettings = {
    spaceBetween: 48,
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
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {Children.map(children, (child) => (
          <Styled.Slide key={child}>{child}</Styled.Slide>
        ))}

        <Navigation activeIndex={activeIndex} length={children.length} />

        <Pagination length={children.length} activeIndex={activeIndex} />
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
