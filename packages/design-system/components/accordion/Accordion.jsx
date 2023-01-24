import { string, node, oneOf } from "prop-types"
import React, { useState } from "react"

import Icon from "design-system/components/icon"

import * as Styled from "./Accordion.styled"

const Accordion = ({ children, text, color, activeColor }) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <Styled.Accordion color={color}>
      <Styled.Title
        variant="h5"
        as="div"
        onClick={() => setIsActive(!isActive)}
        color={isActive ? activeColor : color}
      >
        {text}
        <Styled.Icon color={color} isActive={isActive}>
          <Icon name="arrowUp" />
        </Styled.Icon>
      </Styled.Title>
      {isActive && <Styled.Content color={color}>{children}</Styled.Content>}
    </Styled.Accordion>
  )
}

Accordion.propTypes = {
  text: string.isRequired,
  children: node,
  color: oneOf(["black", "white", "primary"]),
  activeColor: oneOf(["black", "primary"]),
}

Accordion.defaultProps = {
  children: null,
  color: "black",
  activeColor: "black",
}

export default Accordion
