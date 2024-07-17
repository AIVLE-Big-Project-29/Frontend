import React from 'react';
import * as SC from './style';

const DetailModal = ({ openDetail, closeDetail, selectedPost }) => {
  if (!openDetail || !selectedPost) return null;

  return (
    <SC.DetailModalContainer>
      <SC.DetailModalContent>
        <SC.DetailModalHeader>
          <SC.DetailTitleText></SC.DetailTitleText>
          <SC.DetailCloseButton onClick={closeDetail}>&times;</SC.DetailCloseButton>
        </SC.DetailModalHeader>
        <SC.DetailModalBody>
          <SC.DetailTitleWrapper>
            <p>{selectedPost.title}</p>
          </SC.DetailTitleWrapper>
          <SC.DetailContentWrapper>
            <p>{selectedPost.content}</p>
          </SC.DetailContentWrapper>
        </SC.DetailModalBody>
      </SC.DetailModalContent>
    </SC.DetailModalContainer>
  );
};

export default DetailModal;
