import { string } from "prop-types"
import * as Styled from "./Image.styled"

const Image = ({ src, alt }) => <Styled.Image src={src} alt={alt} />

Image.propTypes = {
  /**
   * The alternate text for the image.
   */
  alt: string,
  /**
   * The source URL of the image.
   */
  src: string,
}

Image.defaultProps = {
  alt: null,
  src: null,
}

export default Image
