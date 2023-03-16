import { useTheme } from "@emotion/react"
import { useSwiper } from "swiper/react"
import { number } from "prop-types"

import Icon from "design-system/components/icon"

import * as Styled from "./Slider.styled"

const Navigation = ({ activeIndex, length }) => {
  const slider = useSwiper()
  const theme = useTheme()

  return (
    <>
      <Styled.Arrow
        direction="prev"
        onClick={() => {
          slider.slidePrev()
        }}
      >
        <Icon
          name="chevronLeft"
          color={
            activeIndex ? theme.colors.primary[400] : theme.colors.grey[300]
          }
          size="large"
        />
      </Styled.Arrow>
      <Styled.Arrow
        direction="next"
        onClick={() => {
          slider.slideNext()
        }}
      >
        <Icon
          name="chevronRight"
          color={
            activeIndex < length - 1
              ? theme.colors.primary[400]
              : theme.colors.grey[300]
          }
          size="large"
        />
      </Styled.Arrow>
    </>
  )
}

Navigation.propTypes = {
  activeIndex: number.isRequired,
  length: number.isRequired,
}

export default Navigation
