import { useState, useEffect } from 'react';
import * as SC from './style';
import dele from '../../../../assets/images/delete.svg';
import modi from '../../../../assets/images/modify.svg';

const DetailModal = ({ isOpen, closeModal, selectedPost, onDelete, onModify }) => { // prop 이름 수정
  if (!isOpen || !selectedPost) return null;

  useEffect(() => {
    if (isOpen && selectedPost) {
      setEditedTitle(selectedPost.title);
      setEditedContent(selectedPost.content);
    }
  }, [isOpen, selectedPost]);

  const handleModifyDetail = () => {
    setIsEditMode(true);
  };
  const handleSaveDetail = () => {
    onModify(editedTitle, editedContent);  // posts가 비동기라 앞에 await 넣어야 된다는디?
    setIsEditMode(false);
  };

  const [isEditMode, setIsEditMode] = useState(false);
  const [editedTitle, setEditedTitle] = useState(selectedPost.title);
  const [editedContent, setEditedContent] = useState(selectedPost.content);

  return (
    <SC.DetailModalContainer isOpen={isOpen}>
      <SC.DetailModalContent>
        <SC.DetailModalHeader>
          <SC.DetailTitleText></SC.DetailTitleText>
          <SC.DetailCloseButton onClick={closeModal}>&times;</SC.DetailCloseButton>
        </SC.DetailModalHeader>
        <SC.DetailModalBody>
          <SC.DetailTitleWrapper>
            {isEditMode ? (
                <SC.TitleArea
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                />
            ) : (
                <p>{selectedPost.title}</p>
            )}
          </SC.DetailTitleWrapper>
          <SC.Th>{selectedPost.name}</SC.Th>
          <SC.Th>{selectedPost.date}</SC.Th>
          <SC.DetailContentWrapper>
            {isEditMode ? (
                <SC.ContentArea
                  value={editedContent}
                  onChange={(e) => setEditedContent(e.target.value)}
                />
            ) : (
                <p>{selectedPost.content}</p>
            )}
          </SC.DetailContentWrapper>
        </SC.DetailModalBody>
        <SC.DetailModalFooter>
          <SC.DetailDeleteButton onClick={onDelete}>
            <img src={dele} alt="Delete" />
          </SC.DetailDeleteButton>
            {isEditMode ? (
              <SC.DetailSaveButton onClick={handleSaveDetail}>Save</SC.DetailSaveButton>
            ) : (
              <SC.DetailModifyButton onClick={handleModifyDetail}>
                <img src={modi} alt="Modify" />
              </SC.DetailModifyButton>
            )}
        </SC.DetailModalFooter>
      </SC.DetailModalContent>
    </SC.DetailModalContainer>
  );
};

export default DetailModal;
