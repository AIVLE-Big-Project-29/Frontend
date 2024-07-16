import React, { useState, useEffect } from 'react';
import * as SC from './style';
import Modal from '../../../Modal/ProfileModal';

const Sidebar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const [profileImage, setProfileImage] = useState(localStorage.getItem('profileImage') || '');

  useEffect(() => {
    const storedImage = localStorage.getItem('profileImage');
    if (storedImage) {
      setProfileImage(storedImage);
    }
  }, []);

  const openModal = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setModalPosition({ top: rect.bottom + window.scrollY, left: rect.left });
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const handleProfileImageChange = (image) => {
    setProfileImage(image);
    localStorage.setItem('profileImage', image);
  };

  return (
    <SC.SidebarContainer>
      <SC.SidebarItem onClick={openModal}>
        <SC.SidebarIcon src={profileImage || 'path/to/default/icon'} alt="Icon" />
        <span onClick={openModal} style={{ cursor: 'pointer' }}>김태희</span> {/* 이름 클릭 시 모달 열기 */}
      </SC.SidebarItem>
      {isModalOpen && (
        <Modal
          top={modalPosition.top}
          left={modalPosition.left}
          onClose={closeModal}
          profileImage={profileImage}
          onProfileImageChange={handleProfileImageChange}
        />
      )}
    </SC.SidebarContainer>
  );
};

export default Sidebar;
