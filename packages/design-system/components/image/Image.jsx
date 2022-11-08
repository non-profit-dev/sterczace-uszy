import { string, urlPropType } from "prop-types"
import * as Styled from "./Image.styled"

import image from "./components/image/dog.jpg"

const Image = ({ src, alt }) => (
  <Styled.Image>
    <img src={image} alt={dog} />
  </Styled.Image>
)
Image.propTypes = {
  src: urlPropType.isRequired,
  alt: string.isRequired,
}
export default Image
