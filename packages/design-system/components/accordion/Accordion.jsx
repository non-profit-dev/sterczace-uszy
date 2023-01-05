import { string, node, oneOf, bool } from "prop-types"
import * as Styled from "./Accordion.styled"
import Icon from "design-system/components/icon"
import React, { useState } from 'react'


const Accordion = ({ children, inactiveIcon, activeIcon, text, button, variant, required, }) =>  {
  const [isActive, setIsActive] = useState(false);
  return (
  <Styled.Accordion
  >
    <Styled.Title onClick={() => setIsActive(!isActive)}>
    {text} {required}
    { isActive ? 
    <Icon name={activeIcon} /> :  <Icon name={inactiveIcon} /> 
    }

    </Styled.Title>
    {isActive &&
    <Styled.Content variant={variant} required={required}>
    {children} 
    {button}
    </Styled.Content>}

  </Styled.Accordion>
);
}

Accordion.propTypes = {
  text: string.isRequired,
  children: node.isRequired,
  activeIcon: string,
  inactiveIcon: string,
  required: bool,
  name: string,
  button: node,
  variant: oneOf(["primary", "main", "neutrals"]),
}

Accordion.defaultProps = {
  children: null,
  variant: "primary",
  activeIcon: null,
  inactiveIcon: string,
  name: null,
  button: null,
  required: false,
}

export default Accordion