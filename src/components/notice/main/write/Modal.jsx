import React, { useState } from 'react';
import * as SC from './style';

const Modal = ({ isOpen, closeModal }) => {
  return (
    <SC.ModalContainer isOpen={isOpen}>
      <SC.ModalContent>
      <SC.ModalHeader>
          <h2>새 글</h2>
          <SC.CloseButton onClick={closeModal}>&times;</SC.CloseButton>
        </SC.ModalHeader>
        <SC.ModalBody>
          <label>
            제목:
            <input type="text" />
          </label>
          <br />
          <label>
            내용:
            <textarea></textarea>
          </label>
        </SC.ModalBody>
        <SC.ModalFooter>
          <SC.SaveButton onClick={closeModal}>Save</SC.SaveButton>
        </SC.ModalFooter>
      </SC.ModalContent>
    </SC.ModalContainer>
  );
}

export default Modal;