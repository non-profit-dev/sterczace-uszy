import * as Styled from "./MicrochipsBanner.styled"

const MicrochipsBanner = () => (
  <Styled.Banner>
    <picture>
      <source
        srcSet="/about/safe-animal-desktop.png"
        media="(min-width: 1200px)"
      />
      <source
        srcSet="/about/safe-animal-tablet.png"
        media="(min-width: 587px)"
      />
      <Styled.Image src="/about/safe-animal-mobile.png" alt="" />
    </picture>
  </Styled.Banner>
)

export default MicrochipsBanner
