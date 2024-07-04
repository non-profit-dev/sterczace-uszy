import React from "react"
import ModalComponent from "react-modal"
import { node, bool, func, string } from "prop-types"

import Typography from "design-system/components/typography"
import Icon from "design-system/components/icon"

import * as Styled from "./Modal.styled"

const customStyles = {
  overlay: {
    zIndex: "99",
    background: "rgba(0, 0, 0, 0.2)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "14px",
  },
}

const Modal = ({ title, open, onClose, children }) => (
  <ModalComponent
    isOpen={open}
    onRequestClose={onClose}
    style={customStyles}
    ariaHideApp={false}
  >
    <Styled.Wrapper>
      <Styled.Header>
        <Typography variant="h4" as="p">
          {title}
        </Typography>

        <Styled.CloseButton onClick={onClose}>
          <Icon name="close" size="medium" />
        </Styled.CloseButton>
      </Styled.Header>

      <Styled.Body>{children}</Styled.Body>
    </Styled.Wrapper>
  </ModalComponent>
)

Modal.propTypes = {
  title: string,
  children: node.isRequired,
  open: bool,
  onClose: func,
}

Modal.defaultProps = {
  title: null,
  open: false,
  onClose: () => {},
}

export default Modal
