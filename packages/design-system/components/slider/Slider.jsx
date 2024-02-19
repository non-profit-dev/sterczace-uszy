import { useState, Children } from "react"

import { PropTypes, number, string, func, bool } from "prop-types"

import * as Styled from "./Slider.styled"

import Navigation from "./Navigation"
import Pagination from "./Pagination"

const Slider = ({
  children,
  slidesPerView,
  slidesPerViewDesktop,
  slidesPerViewTablet,
  slidesPerViewTabletLg,
  slidesPerViewMobile,
  gap,
  mobileGap,
  onSlideChange,
  pagination,
  navigation,
  activeIndex,
  className,
}) => {
  const [index, setIndex] = useState(activeIndex)
  const [paginationLength, setPaginationLength] = useState(0)

  const swiperSettings = {
    spaceBetween: mobileGap,
    slidesPerView,
    breakpoints: {
      390: {
        slidesPerView: slidesPerViewMobile,
        spaceBetween: mobileGap,
      },
      587: {
        slidesPerView: slidesPerViewTablet,
        spaceBetween: mobileGap,
      },
      744: {
        slidesPerView: slidesPerViewTabletLg,
        spaceBetween: mobileGap,
      },
      992: {
        slidesPerView: slidesPerViewDesktop,
        spaceBetween: mobileGap,
      },
      1200: {
        slidesPerView: slidesPerViewDesktop,
        spaceBetween: gap,
      },
    },
  }

  const onChange = (swiper) => {
    setIndex(swiper.activeIndex)
    onSlideChange?.(swiper.activeIndex)
  }

  return (
    <Styled.Slider
      {...swiperSettings}
      onSlideChange={(swiper) => onChange(swiper)}
      slideToClickedSlide
      onSnapGridLengthChange={(swiper) =>
        setPaginationLength(swiper.snapGrid.length)
      }
      className={className}
    >
      {Children.map(children, (child) => (
        <Styled.Slide key={child}>{child}</Styled.Slide>
      ))}
      {navigation ? (
        <Navigation activeIndex={index} length={children.length} />
      ) : null}

      {pagination ? (
        <Pagination activeIndex={index} length={paginationLength} />
      ) : null}
    </Styled.Slider>
  )
}

Slider.propTypes = {
  children: PropTypes.node.isRequired,
  slidesPerView: number,
  slidesPerViewDesktop: number,
  slidesPerViewTablet: number,
  slidesPerViewTabletLg: number,
  slidesPerViewMobile: number,
  gap: number,
  mobileGap: number,
  className: string,
  onSlideChange: func,
  pagination: bool,
  navigation: bool,
  activeIndex: number,
}

Slider.defaultProps = {
  slidesPerView: 1,
  slidesPerViewDesktop: 3,
  slidesPerViewTablet: 1.5,
  slidesPerViewTabletLg: 2.2,
  slidesPerViewMobile: 1.2,
  gap: 48,
  mobileGap: 32,
  className: null,
  onSlideChange: null,
  pagination: false,
  navigation: false,
  activeIndex: 0,
}

export default Slider
