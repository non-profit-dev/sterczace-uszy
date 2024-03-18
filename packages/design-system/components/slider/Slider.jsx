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
  slidesPerGroupDesktop,
  gap,
  mobileGap,
  onSlideChange,
  pagination,
  navigation,
  activeIndex,
  className,
}) => {
  const [index, setIndex] = useState(activeIndex)
  const [snapIndex, setSnapIndex] = useState(activeIndex)
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
        slidesPerGroup: slidesPerGroupDesktop,
        spaceBetween: mobileGap,
      },
      1200: {
        slidesPerView: slidesPerViewDesktop,
        slidesPerGroup: slidesPerGroupDesktop,
        spaceBetween: gap,
      },
    },
  }

  const onChange = (swiper) => {
    setIndex(swiper.activeIndex)
    setSnapIndex(swiper.snapIndex)
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
        <Pagination
          activeIndex={snapIndex}
          length={paginationLength}
          slidesPerGroup={slidesPerGroupDesktop}
        />
      ) : null}
    </Styled.Slider>
  )
}

Slider.propTypes = {
  children: PropTypes.node.isRequired,
  slidesPerView: number,
  slidesPerViewDesktop: number,
  slidesPerGroupDesktop: number,
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
  activeSnapIndex: number,
}

Slider.defaultProps = {
  slidesPerView: 1.2,
  slidesPerViewDesktop: 3,
  slidesPerViewTablet: 1.5,
  slidesPerViewTabletLg: 2.2,
  slidesPerViewMobile: 1.2,
  slidesPerGroupDesktop: 3,
  gap: 48,
  mobileGap: 32,
  className: null,
  onSlideChange: null,
  pagination: false,
  navigation: false,
  activeIndex: 0,
  activeSnapIndex: 0,
}

export default Slider
