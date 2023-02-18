import { Children } from "react"
import ReactSlickSlider from "react-slick"
import PropTypes from "prop-types"
import IconButton from "design-system/components/iconButton"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import * as Styled from "./Slider.styled"

const Slider = ({ children }) => {
  const PrevArrow = Styled.PrevArrow
  const NextArrow = Styled.NextArrow

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: (
      <NextArrow>
        <IconButton
          name="chevronRight"
          size="medium"
          ariaLabel="slider arrow right"
        />
      </NextArrow>
    ),
    prevArrow: (
      <PrevArrow>
        <IconButton
          name="chevronLeft"
          size="medium"
          ariaLabel="slider arrow left"
        />
      </PrevArrow>
    ),
  }

  return (
    <Styled.SliderWrapper>
      <ReactSlickSlider {...settings}>
        {Children.map(children, (child, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Styled.Slide key={index}>{child}</Styled.Slide>
        ))}
      </ReactSlickSlider>
    </Styled.SliderWrapper>
  )
}

Slider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Slider
