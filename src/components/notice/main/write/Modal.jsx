import React, { useState } from 'react';
import * as SC from './style';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Modal = ({ isOpen, closeModal }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [isTitleFocused, setIsTitleFocused] = useState(false);
  const [content, setContent] = useState('');
  const [isContentFocused, setIsContentFocused] = useState(false);

  const handleCloseModal = () => {
    closeModal();
    setTitle('');
    setContent('');
  };

  const handleSave = async () => {
    try {
      const response = await axios({
        method: 'POST',
        url: 'http://172.30.1.84:8000/notice/board/create/', // 실제 서버 URL로 변경
        data: {
          title: title,
          content: content,
        },
      });

      console.log('Server response:', response.data);
      handleCloseModal();
    } catch (error) {
      handleCloseModal();
      console.error('Error saving post:', error);
    }
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
              placeholder="제목"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onFocus={() => setIsTitleFocused(true)}
              onBlur={() => setIsTitleFocused(false)}
            />
          </SC.TitleInputWrapper>
          <br />
          <SC.ContentInputWrapper>
            <SC.Textarea
              placeholder="내용"
              value={content}
              style={{ resize: 'none' }}
              onChange={(e) => setContent(e.target.value)}
              onFocus={() => setIsContentFocused(true)}
              onBlur={() => setIsContentFocused(false)}
            ></SC.Textarea>
          </SC.ContentInputWrapper>
        </SC.ModalBody>
        <SC.ModalFooter>
          <SC.SaveButton onClick={handleSave}>Save</SC.SaveButton>
        </SC.ModalFooter>
      </SC.ModalContent>
    </SC.ModalContainer>
  );
};

export default Modal;
