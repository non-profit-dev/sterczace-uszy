import { useState, Children } from "react"

import { PropTypes, number, string } from "prop-types"

import * as Styled from "./Slider.styled"

import Navigation from "./Navigation"
import Pagination from "./Pagination"

const Slider = ({
  children,
  slidesPerViewDesktop,
  slidesPerViewTablet,
  slidesPerViewTabletLg,
  slidesPerViewMobile,
  gap,
  className,
}) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [paginationLength, setPaginationLength] = useState(0)

  const swiperSettings = {
    spaceBetween: gap,
    breakpoints: {
      390: {
        slidesPerView: slidesPerViewMobile,
      },
      587: {
        slidesPerView: slidesPerViewTablet,
      },
      744: {
        slidesPerView: slidesPerViewTabletLg,
        spaceBetween: gap,
      },
      992: {
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: slidesPerViewDesktop,
        spaceBetween: gap,
      },
    },
  }

  return (
    <Styled.Slider
      {...swiperSettings}
      onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      onSnapGridLengthChange={(swiper) =>
        setPaginationLength(swiper.snapGrid.length)
      }
      className={className}
    >
      {Children.map(children, (child) => (
        <Styled.Slide key={child}>{child}</Styled.Slide>
      ))}
      <Navigation activeIndex={activeIndex} length={children.length} />
      <Pagination activeIndex={activeIndex} length={paginationLength} />
    </Styled.Slider>
  )
}

Slider.propTypes = {
  children: PropTypes.node.isRequired,
  slidesPerViewDesktop: number,
  slidesPerViewTablet: number,
  slidesPerViewTabletLg: number,
  slidesPerViewMobile: number,
  gap: number,
  className: string,
}

Slider.defaultProps = {
  slidesPerViewDesktop: 3,
  slidesPerViewTablet: 1.5,
  slidesPerViewTabletLg: 2,
  slidesPerViewMobile: 1,
  gap: 48,
  className: null,
}

export default Slider
