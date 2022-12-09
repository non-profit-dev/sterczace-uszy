import { string } from "prop-types"

import * as Styled from "./Input.styled"

const Input = ({ placeholder }) => <Styled.Input placeholder={placeholder} />

Input.propTypes = {
  placeholder: string,
}

Input.defaultProps = {
  placeholder: "",
}

export default Input
