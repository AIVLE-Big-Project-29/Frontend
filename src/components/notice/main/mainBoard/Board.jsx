import React, { useState } from 'react';
import * as SC from './style';
import add from '../../../../assets/images/add.svg';
import BoardTable from '../boardTable/BoardTable';
import Modal from '../write/Modal';

const Board = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <SC.MainBoard>
      <SC.BoardHeader>
        <SC.HeaderGroup>
          <SC.HeaderBtn onClick={openModal}>
            <SC.BtnIconContainer>
              <SC.HeaderIcon src={add} alt="add 아이콘" />
            </SC.BtnIconContainer>
          </SC.HeaderBtn>
        </SC.HeaderGroup>
      </SC.BoardHeader>
      <BoardTable />
      <Modal isOpen={isModalOpen} closeModal={closeModal} />
    </SC.MainBoard>
  );
};

export default Board;
