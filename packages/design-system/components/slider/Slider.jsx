import React from "react"
import { useTheme } from "@emotion/react"
import { Pagination, Navigation } from "swiper"
import { Swiper } from "swiper/react"
import { PropTypes, number } from "prop-types"
import "swiper/swiper-bundle.css"

import Icon from "design-system/components/icon"

import * as Styled from "./Slider.styled"

const Slider = ({
  children,
  slidesPerViewDesktop,
  slidesPerViewTablet,
  slidesPerViewTabletLg,
  slidesPerViewMobile,
}) => {
  const navigationPrevRef = React.useRef(null)
  const navigationNextRef = React.useRef(null)
  const paginationRef = React.useRef(null)

  const theme = useTheme()

  const swiperSettings = {
    navigation: {
      prevEl: navigationPrevRef.current,
      nextEl: navigationNextRef.current,
    },
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
        modules={[Navigation, Pagination]}
        /* eslint-disable no-param-reassign */
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current
          swiper.params.navigation.nextEl = navigationNextRef.current
          swiper.params.pagination.el = paginationRef.current
          swiper.navigation.update()
          swiper.pagination.update()
        }}
      >
        {React.Children.map(children, (child, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Styled.Slide key={index}>{child}</Styled.Slide>
        ))}
        <Styled.Arrow direction="prev" ref={navigationPrevRef}>
          <Icon name="chevronLeft" color={theme.colors.primary[400]} />
        </Styled.Arrow>
        <Styled.Arrow direction="next" ref={navigationNextRef}>
          <Icon name="chevronRight" color={theme.colors.primary[400]} />
        </Styled.Arrow>
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
