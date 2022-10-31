import { string, urlPropType } from "prop-types"
import * as Styled from "./Image.styled"

const Image = ({ src, alt }) => (
  <Styled.Image>
    <img src={src} alt={alt} />
  </Styled.Image>
)
Image.propTypes = {
  src: urlPropType.isRequired,
  alt: string.isRequired,
}
export default Image
