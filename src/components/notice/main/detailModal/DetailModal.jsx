import React from 'react';
import * as SC from './style';

const DetailModal = ({ isOpen, closeModal, selectedPost }) => { // prop 이름 수정
  if (!isOpen || !selectedPost) return null;

  return (
    <SC.DetailModalContainer isOpen={isOpen}> {/* prop 추가 */}
      <SC.DetailModalContent>
        <SC.DetailModalHeader>
          <SC.DetailTitleText></SC.DetailTitleText>
          <SC.DetailCloseButton onClick={closeModal}>&times;</SC.DetailCloseButton>
        </SC.DetailModalHeader>
        <SC.DetailModalBody>
          <SC.DetailTitleWrapper>
            <p>{selectedPost.title}</p>
          </SC.DetailTitleWrapper>
          <SC.Th>{selectedPost.name}</SC.Th>
          <SC.Th>{selectedPost.date}</SC.Th>
          <SC.DetailContentWrapper>
            <p>{selectedPost.content}</p>
          </SC.DetailContentWrapper>
        </SC.DetailModalBody>
      </SC.DetailModalContent>
    </SC.DetailModalContainer>
  );
};

export default DetailModal;
