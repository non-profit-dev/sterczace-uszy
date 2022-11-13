import { string } from "prop-types"
import * as Styled from "./Image.styled"

const Image = ({ Src, Alt }) => <Styled.Image src={Src} alt={Alt} />

Image.propTypes = {
  Alt: string,
  Src: string,
}

Image.defaultProps = {
  Alt: null,
  Src: null,
}

export default Image
