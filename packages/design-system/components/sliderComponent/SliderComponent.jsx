import React from "react"
import Slider from "react-slick"
import PropTypes from "prop-types"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import * as Styled from "./SliderComponent.styled"


const SliderComponent = ({ children }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    dotsClass: "dots",
    prevArrow: <Styled.PrevArrow>{">"}</Styled.PrevArrow>,
    nextArrow: <Styled.NextArrow>{"<"}</Styled.NextArrow>,
    customPaging: (i) => {
      return (
        <Styled.Dot
          isActive={i === props.slickCurrentSlide}
          onClick={() => props.slickGoTo(i)}
        />
      )
    },
    appendDots: (dots) => {
      return (
        <div>
          <Styled.Dot />
          {dots}
          <Styled.Dot />
        </div>
      )
    },
  }

  return (
    <Styled.SliderWrapper>
      <Slider {...settings}>{children}</Slider>
    </Styled.SliderWrapper>
  )
}

SliderComponent.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SliderComponent
