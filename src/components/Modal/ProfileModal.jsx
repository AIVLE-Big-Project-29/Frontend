import * as SC from './profileModalStyle';
import Logout from '../logout/Logout';
import profileIcon from '../../assets/images/profileIcon.png';

const ProfileModal = ({ top, onClose, onProfileImageChange, profileImage }) => {
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
      <SC.ModalContainer
        style={{ top: top }}
        onClick={(e) => e.stopPropagation()}
      >
        <SC.ProfileContent>
          <SC.ProfileImageWrapper>
            <SC.ProfileImage src={profileImage || profileIcon} alt="Profile" />
            <SC.ProfileImageInput
              type="file"
              accept="image/*"
              onChange={handleProfileImageChange}
            />
          </SC.ProfileImageWrapper>
          <SC.ProfileDetails>
            <SC.ProfileNameWrapper>
              <SC.ProfileName>test12</SC.ProfileName>
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
