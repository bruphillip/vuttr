import React from 'react';
import Modal from '../../../ui/Modal';

function AddTool({ open, close, isOpen }) {
  return (
    <Modal show={isOpen} handleClose={close} header="Adicionar Tool">
      <>
        <p>Modal</p>
        <p>Data</p>
      </>
    </Modal>
  );
}

export default AddTool;
