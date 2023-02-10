import { string, number } from "prop-types"
import * as Styled from "./Image.styled"

const Image = ({ src, alt, width, height }) => (
  <Styled.Image src={src} alt={alt || ""} width={width} height={height} />
)

Image.propTypes = {
  /**
   * The alternate text for the image.
   */
  alt: string,
  /**
   * The source URL of the image.
   */
  src: string,
  width: number,
  height: number,
}

Image.defaultProps = {
  alt: null,
  src: null,
  width: null,
  height: null,
}

export default Image
