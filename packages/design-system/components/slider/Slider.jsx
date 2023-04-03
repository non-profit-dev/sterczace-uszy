import { useState, Children } from "react"

import { PropTypes, number, string, func, bool } from "prop-types"

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
  onSlideChange,
  pagination,
  navigation,
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

  const onChange = (swiper) => {
    setActiveIndex(swiper.activeIndex)
    onSlideChange?.(swiper.activeIndex)
  }

  return (
    <Styled.Slider
      {...swiperSettings}
      onSlideChange={(swiper) => onChange(swiper)}
      onSnapGridLengthChange={(swiper) =>
        setPaginationLength(swiper.snapGrid.length)
      }
      className={className}
    >
      {Children.map(children, (child) => (
        <Styled.Slide key={child}>{child}</Styled.Slide>
      ))}
      {navigation ? (
        <Navigation activeIndex={activeIndex} length={children.length} />
      ) : null}

      {pagination ? (
        <Pagination activeIndex={activeIndex} length={paginationLength} />
      ) : null}
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
  onSlideChange: func,
  pagination: bool,
  navigation: bool,
}

Slider.defaultProps = {
  slidesPerViewDesktop: 3,
  slidesPerViewTablet: 1.5,
  slidesPerViewTabletLg: 2,
  slidesPerViewMobile: 1,
  gap: 48,
  className: null,
  onSlideChange: null,
  pagination: false,
  navigation: false,
}

export default Slider
