import { useState } from "react"
import { string, arrayOf, shape } from "prop-types"

import Typography from "design-system/components/typography"
import Image from "design-system/components/image"

import * as Styled from "./Gallery.styled"

const Gallery = ({ images, imageSrc }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <Styled.Gallery>
      <Styled.MainImage
        src={images.length ? images[activeIndex].url : imageSrc}
      />

      {images.length ? (
        <>
          <Styled.Slider
            gap={15}
            onSlideChange={(index) => setActiveIndex(index)}
            activeIndex={activeIndex}
            slidesPerView={3}
            slidesPerViewTablet={3}
            slidesPerViewTabletLg={3}
            slidesPerViewMobile={3}
          >
            {images.map((item, i) => (
              <Styled.ImageWrapper
                key={item.url}
                active={i === activeIndex}
                onClick={() => setActiveIndex(i)}
              >
                <Image src={item.url} alt="" />
              </Styled.ImageWrapper>
            ))}
          </Styled.Slider>

          <Styled.Length>
            <Typography variant="h6">
              {activeIndex + 1} / {images.length}
            </Typography>
          </Styled.Length>
        </>
      ) : null}
    </Styled.Gallery>
  )
}

Gallery.propTypes = {
  images: arrayOf(
    shape({
      url: string,
    })
  ),
  imageSrc: string.isRequired,
}

Gallery.defaultProps = {
  images: [],
}

export default Gallery
