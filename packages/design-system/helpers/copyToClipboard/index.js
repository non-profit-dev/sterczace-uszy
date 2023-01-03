import { number, oneOfType, string } from "prop-types"

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text)
}
copyToClipboard.propTypes = {
  text: oneOfType([string, number]),
}

export default copyToClipboard
