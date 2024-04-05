import { useSwiper } from "swiper/react"
import { useTheme } from "@emotion/react"
import { number } from "prop-types"

import * as Styled from "./Slider.styled"

const Pagination = ({ activeIndex, length, slidesPerGroup }) => {
  const slider = useSwiper()
  const theme = useTheme()

  return (
    <Styled.BulletContainer>
      {Array.from({ length }, (_, index) => (
        <Styled.Bullet
          onClick={() => {
            slider.slideTo(index * slidesPerGroup)
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
  activeIndex: number.isRequired,
  length: number.isRequired,
  slidesPerGroup: number.isRequired,
}

export default Pagination
