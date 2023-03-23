import { useTheme } from "@emotion/react"
import { useSwiper } from "swiper/react"

import Icon from "design-system/components/icon"

import * as Styled from "./Slider.styled"

const Navigation = () => {
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
            slider.isBeginning
              ? theme.colors.gray[300]
              : theme.colors.primary[400]
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
            slider.isEnd ? theme.colors.gray[300] : theme.colors.primary[400]
          }
          size="large"
        />
      </Styled.Arrow>
    </>
  )
}

export default Navigation
