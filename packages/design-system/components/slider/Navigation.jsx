import { useState } from "react"
import { useTheme } from "@emotion/react"
import { useSwiper } from "swiper/react"

import Icon from "design-system/components/icon"

import * as Styled from "./Slider.styled"

const Navigation = () => {
  const slider = useSwiper()
  const [isEnd, setIsEnd] = useState(false)
  const [isBeginning, setIsBeginning] = useState(true)

  const theme = useTheme()

  return (
    <>
      <Styled.Arrow
        direction="prev"
        onClick={() => {
          slider.slidePrev()
          setIsBeginning(slider.isBeginning)
          setIsEnd(slider.isEnd)
        }}
      >
        <Icon
          name="chevronLeft"
          color={
            isBeginning ? theme.colors.grey[300] : theme.colors.primary[400]
          }
        />
      </Styled.Arrow>
      <Styled.Arrow
        direction="next"
        onClick={() => {
          slider.slideNext()
          setIsBeginning(slider.isBeginning)
          setIsEnd(slider.isEnd)
        }}
      >
        <Icon
          name="chevronRight"
          color={isEnd ? theme.colors.grey[300] : theme.colors.primary[400]}
        />
      </Styled.Arrow>
    </>
  )
}

export default Navigation
