import { useState } from "react"
import { useSwiper } from "swiper/react"
import { useTheme } from "@emotion/react"

import * as Styled from "./Slider.styled"

const Pagination = () => {
  const slider = useSwiper()

  const [activeIndex, setActiveIndex] = useState(0)

  const theme = useTheme()

  return (
    <Styled.BulletContainer>
      {slider.slides.map((bullet) => (
        <Styled.Bullet
          onClick={() => {
            slider.slidePrev()
            setActiveIndex(slider.activeIndex)
          }}
          color={
            activeIndex ? theme.colors.grey[300] : theme.colors.primary[400]
          }
          key={bullet}
        >
          {bullet}
        </Styled.Bullet>
      ))}
    </Styled.BulletContainer>
  )
}

export default Pagination
