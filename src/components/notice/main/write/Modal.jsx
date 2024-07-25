import { useState } from 'react';
import * as SC from './style';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BOARDCREATEURL } from '../../../../tokens/Urls';

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
      const token = localStorage.getItem('accessToken');
      const response = await axios({
        method: 'POST',
        url: BOARDCREATEURL, // 실제 서버 URL로 변경
        data: {
          title: title,
          content: content,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log('Server response:', response.data);
      handleCloseModal();
      // 자동 새로고침
      window.location.reload();
    } catch (error) {
      handleCloseModal();
      console.error('Error saving post:', error);
    }
  };

  const titleHandler = (event) => {
    console.log(event.target.value);
    setTitle(event.target.value);
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
              onChange={titleHandler}
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
