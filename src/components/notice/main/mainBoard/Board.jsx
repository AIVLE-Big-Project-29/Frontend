import React, { useState } from 'react';
import * as SC from './style';
import add from '../../../../assets/images/add.svg';
import BoardTable from '../boardTable/BoardTable';
import Modal from '../write/Modal';

const Board = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const controlModel = () => {
    setIsModalOpen((prev) => !prev);
  };

  // const openModal = () => setIsModalOpen(true);
  // const closeModal = () => setIsModalOpen(false);

  const handleSave = async () => {
    try {
      const response = await axios({
        method: 'post',
        url: 'http://172.30.1.84:8000/notice/board/', // 실제 서버 URL로 변경
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
    <SC.MainBoard>
      <SC.BoardHeader>
        <SC.HeaderGroup>
          <SC.HeaderBtn onClick={controlModel}>
            <SC.BtnIconContainer>
              <SC.HeaderIcon src={add} alt="add 아이콘" />
            </SC.BtnIconContainer>
          </SC.HeaderBtn>
        </SC.HeaderGroup>
      </SC.BoardHeader>
      <BoardTable data={data}/>
      {isModalOpen && <Modal isOpen={handleSave} closeModal={controlModel} />}
    </SC.MainBoard>
  );
};

export default Board;
