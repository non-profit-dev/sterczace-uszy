import React, { useState } from "react"
import { string, oneOf, shape, func } from "prop-types"

import * as Styled from "./Badge.styled"

const Badge = ({ backgroundColor, text }) => {
  const [favorite, setFavorite] = useState("r")

  return <Styled.Badge backgroundColor={backgroundColor}>{text}</Styled.Badge>
}

Badge.propTypes = {
  text: string.isRequired,
  backgroundColor: string,
}

Badge.defaultProps = {
  backgroundColor: "red",
}

export default Badge
