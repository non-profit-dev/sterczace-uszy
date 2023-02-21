import { string, node, oneOf, bool } from "prop-types"
import React, { useState } from "react"

import Icon from "design-system/components/icon"

import * as Styled from "./Accordion.styled"

const Accordion = ({ children, heading, color, activeColor, shadow }) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <Styled.Accordion color={color} shadow={shadow}>
      <Styled.Title
        variant="h5"
        as="button"
        aria-expanded={isActive}
        onClick={() => setIsActive(!isActive)}
        color={isActive ? activeColor : color}
      >
        {heading}
        <Styled.Icon isActive={isActive}>
          <Icon name="chevronUp" />
        </Styled.Icon>
      </Styled.Title>
      {isActive && <Styled.Content role="region">{children}</Styled.Content>}
    </Styled.Accordion>
  )
}

Accordion.propTypes = {
  heading: string.isRequired,
  children: node.isRequired,
  color: oneOf(["black", "white", "primary"]),
  activeColor: oneOf(["black", "primary"]),
  shadow: bool,
}

Accordion.defaultProps = {
  color: "black",
  activeColor: "black",
  shadow: false,
}

export default Accordion
