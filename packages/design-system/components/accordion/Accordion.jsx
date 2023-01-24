import { string, node, oneOf } from "prop-types"
import Icon from "design-system/components/icon"
import React, { useState } from "react"
import * as Styled from "./Accordion.styled"

const Accordion = ({ children, text, color, activeColor }) => {
  const [isActive, setIsActive] = useState(false)
  return (
    <Styled.Accordion
      color={isActive ? activeColor : color}
      activeColor={activeColor}
    >
      <Styled.Title
        onClick={() => setIsActive(!isActive)}
        color={isActive ? activeColor : color}
        activeColor={activeColor}
      >
        {text}
        <Styled.Icon
          color={isActive ? activeColor : color}
          activeColor={activeColor}
          isActive={isActive}
        >
          <Icon name="arrowDown" />
        </Styled.Icon>
      </Styled.Title>
      {isActive && (
        <Styled.Content
          color={isActive ? activeColor : color}
          activeColor={activeColor}
        >
          {children}
        </Styled.Content>
      )}
    </Styled.Accordion>
  )
}

Accordion.propTypes = {
  text: string.isRequired,
  children: node,
  color: oneOf(["black", "white", "primary", "red"]),
  activeColor: oneOf(["black", "white", "primary", "red"]),
}

Accordion.defaultProps = {
  children: null,
  color: "black",
  activeColor: "black",
}

export default Accordion
