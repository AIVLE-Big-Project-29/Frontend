import { useState } from 'react';
import * as SC from './style';
import dot from '../../../../assets/images/dot.svg';
import profileIcon from '../../../../assets/images/profileIcon.png';
import ProfileModal from '../../../Modal/ProfileModal';

const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0 });
  const [profileImage, setProfileImage] = useState('');

  const openModal = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setModalPosition({ top: rect.bottom + window.scrollY });
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const handleProfileImageChange = (image) => {
    setProfileImage(image);
    localStorage.setItem('profileImage', image);
  };

  const userId = localStorage.getItem('userId');

  return (
    <>
      <SC.Profile>
        <SC.ProfileName>
          <SC.ProfileWrapper>
            <SC.ProfilePhoto onClick={openModal}>
              <SC.Photo src={profileImage || profileIcon} alt="프로필 사진" />
            </SC.ProfilePhoto>
            <SC.Name>{userId}</SC.Name>
          </SC.ProfileWrapper>
        </SC.ProfileName>
        {/* <SC.ProfileMenu>
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
        </SC.ProfileMenu> */}
      </SC.Profile>

      {/* {isModalOpen && (
        <ProfileModal
          top={modalPosition.top}
          onClose={closeModal}
          profileImage={profileImage}
          onProfileImageChange={handleProfileImageChange}
        />
      )} */}
    </>
  );
};

export default Profile;
