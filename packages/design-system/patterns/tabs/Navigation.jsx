import { useTheme } from "@emotion/react"
import { useSwiper } from "swiper/react"

import Icon from "design-system/components/icon"

import * as Styled from "./Tabs.styled"

const Navigation = () => {
  const slider = useSwiper()
  const theme = useTheme()

  return (
    <>
      <Styled.NavButton
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
              : theme.colors.primary[500]
          }
          size="large"
        />
      </Styled.NavButton>
      <Styled.NavButton
        direction="next"
        onClick={() => {
          slider.slideNext()
        }}
      >
        <Icon
          name="chevronRight"
          color={
            slider.isEnd ? theme.colors.gray[300] : theme.colors.primary[500]
          }
          size="large"
        />
      </Styled.NavButton>
    </>
  )
}

export default Navigation
