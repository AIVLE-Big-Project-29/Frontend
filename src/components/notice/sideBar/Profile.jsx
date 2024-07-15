import * as SC from './style';

import dot from '../../../assets/images/dot.svg';

const Profile = () => {
  return (
    <SC.Profile>
      <SC.ProfileName>
        <SC.ProfileWrapper>
          <SC.ProfilePhoto>
            <SC.Photo src="" alt="프로필 사진" />
          </SC.ProfilePhoto>
          <SC.Name>ByeWind</SC.Name>
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
  );
};

export default Profile;
