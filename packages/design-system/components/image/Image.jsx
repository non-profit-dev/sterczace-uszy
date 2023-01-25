import { string } from "prop-types"
import * as Styled from "./Image.styled"

const Image = ({ src, alt, className }) => (
  <Styled.Image src={src} alt={alt} className={className} />
)

Image.propTypes = {
  alt: string,
  src: string,
  className: string,
}

Image.defaultProps = {
  alt: null,
  src: null,
  className: null,
}

export default Image
