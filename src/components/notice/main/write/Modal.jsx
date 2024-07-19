import React, { useState } from 'react';
import * as SC from './style';

const Modal = ({ isOpen, closeModal }) => {
  const [title, setTitle] = useState('');
  const [isTitleFocused, setIsTitleFocused] = useState(false);
  const [content, setContent] = useState('');
  const [isContentFocused, setIsContentFocused] = useState(false);

  const handleCloseModal = () => {
    closeModal();
    setTitle('');
    setContent('');
  };

  return (
    <SC.ModalContainer isOpen={isOpen}>
      <SC.ModalContent>
        <SC.ModalHeader>
        <SC.TitleText>새 글</SC.TitleText>
          <SC.CloseButton onClick={handleCloseModal}>&times;</SC.CloseButton>
        </SC.ModalHeader>
        <SC.ModalBody>
          <SC.TitleInputWrapper>
            <SC.Input
              type="text"
              placeholder='제목'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onFocus={() => setIsTitleFocused(true)}
              onBlur={() => setIsTitleFocused(false)}
            />
          </SC.TitleInputWrapper>
          <br />
          <SC.ContentInputWrapper>
            <SC.Textarea
              placeholder='내용'
              value={content}
              style={{ resize: 'none' }}
              onChange={(e) => setContent(e.target.value)}
              onFocus={() => setIsContentFocused(true)}
              onBlur={() => setIsContentFocused(false)}
            ></SC.Textarea>
          </SC.ContentInputWrapper>
        </SC.ModalBody>
        <SC.ModalFooter>
          <SC.SaveButton onClick={closeModal}>Save</SC.SaveButton>
        </SC.ModalFooter>
      </SC.ModalContent>
    </SC.ModalContainer>
  );
}

export default Modal;
