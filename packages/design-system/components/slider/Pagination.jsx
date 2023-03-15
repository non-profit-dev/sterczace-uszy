import { useState } from "react"
import { useSwiper } from "swiper/react"
import { useTheme } from "@emotion/react"
import { number } from "prop-types"

import * as Styled from "./Slider.styled"

const Pagination = ({ slidesNumber }) => {
  const slider = useSwiper()

  const [activeIndex, setActiveIndex] = useState(0)

  const theme = useTheme()

  return (
    <Styled.BulletContainer>
      {[...Array(slidesNumber).keys()].map((index) => (
        <Styled.Bullet
          onClick={() => {
            slider.slideTo(index)
            setActiveIndex(slider.activeIndex)
          }}
          color={
            activeIndex === index
              ? theme.colors.primary[300]
              : theme.colors.primary[100]
          }
          key={index}
        />
      ))}
    </Styled.BulletContainer>
  )
}

Pagination.propTypes = {
  slidesNumber: number.isRequired,
}

export default Pagination
