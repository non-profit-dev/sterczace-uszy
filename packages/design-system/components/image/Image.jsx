import { string } from "prop-types"
import * as Styled from "./Image.styled"

const Image = ({ src, alt, className }) => (
  <Styled.Image src={src} alt={alt} className={className} loading="lazy" />
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
  className: string,
}

Image.defaultProps = {
  alt: "",
  src: null,
  className: null,
}

export default Image
