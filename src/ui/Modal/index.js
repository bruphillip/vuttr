import React from 'react';
import { View, Button, ModalHeader, ModalCard, ModalContent } from './styles';

const Modal = ({ handleClose, show, children, header }) => {
  const oppened = show ? 'display: block' : 'display: none';
  return (
    <View
      className="_Modal"
      visibility={oppened}
      onClick={e => {
        console.log(e.target.className);
        if (e.target.className.includes('_Modal')) {
          return handleClose();
        }
      }}
    >
      <ModalCard>
        <ModalHeader>
          {header}
          <Button onClick={handleClose}>X</Button>
        </ModalHeader>
        <ModalContent>{children}</ModalContent>
      </ModalCard>
    </View>
  );
};

export default Modal;
