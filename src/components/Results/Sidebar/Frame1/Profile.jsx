import React, { useState } from 'react';
import * as SC from './style';
import dot from '../../../../assets/images/dot.svg';
import ProfileModal from '../../../Modal/ProfileModal';

const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const [profileImage, setProfileImage] = useState('');

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
    <>
      <SC.Profile>
        <SC.ProfileName>
          <SC.ProfileWrapper>
            <SC.ProfilePhoto onClick={openModal}>
              <SC.Photo src={profileImage || 'path/to/default/icon'} alt="프로필 사진" />
            </SC.ProfilePhoto>
            <SC.Name onClick={openModal} style={{ cursor: 'pointer' }}> 
            ByeWind
            </SC.Name>
          </SC.ProfileWrapper>
        </SC.ProfileName>
        <SC.ProfileMenu>
          <SC.IconText>
            <SC.IconWrapper>
              <SC.Icon>
                <SC.IconImg src={dot} alt="dot" />
              </SC.Icon>
            </SC.IconWrapper>
            <SC.TextWrapper>
              <SC.Text>My Account</SC.Text>
            </SC.TextWrapper>
          </SC.IconText>
        </SC.ProfileMenu>
      </SC.Profile>

      {isModalOpen && (
        <ProfileModal
          top={modalPosition.top}
          left={modalPosition.left}
          onClose={closeModal}
          profileImage={profileImage}
          onProfileImageChange={handleProfileImageChange}
        />
      )}
    </>
  );
};

export default Profile;
