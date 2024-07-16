import React from 'react';
import * as SC from './profileModalStyle';
import Logout from '../logout/Logout';

const ProfileModal = ({ top, left, onClose, onProfileImageChange, profileImage }) => {

  const handleProfileImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onProfileImageChange(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <SC.ModalBackground onClick={onClose}>
      <SC.ModalContainer style={{ top: top, left: left }} onClick={(e) => e.stopPropagation()}>
        <SC.ProfileContent>
          <SC.ProfileImageWrapper>
            <SC.ProfileImage src={profileImage || 'path/to/default/icon'} alt="Profile" />
            <SC.ProfileImageInput type="file" accept="image/*" onChange={handleProfileImageChange} />
          </SC.ProfileImageWrapper>
          <SC.ProfileDetails>
            <SC.ProfileNameWrapper>
              <SC.ProfileName>윤동진님</SC.ProfileName>
              <Logout />
            </SC.ProfileNameWrapper>
            <SC.ProfileEmail>youndj14@naver.com</SC.ProfileEmail>
          </SC.ProfileDetails>
        </SC.ProfileContent>
      </SC.ModalContainer>
    </SC.ModalBackground>
  );
};

export default ProfileModal;
