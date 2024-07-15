import * as SC from './styled';

import email from '../../../assets/images/email.svg';
import locDot from '../../../assets/images/location.svg';
import phone from '../../../assets/images/phone.svg';
import logo from '../../../assets/images/GreenCity.png';

const Footer = () => {
  return (
    <SC.FooterContainer>
      <SC.SiteLogo>
        <SC.LogoContainer>
          <SC.Logo src={logo} alt="로고" />
        </SC.LogoContainer>
      </SC.SiteLogo>
      <SC.Menu>
        <SC.MenuText>이용약관</SC.MenuText>
        <SC.MenuText>개인정보 처리방침</SC.MenuText>
        <SC.MenuText>Service</SC.MenuText>
        <SC.MenuText>Team</SC.MenuText>
      </SC.Menu>
      {/* contact */}
      <SC.Contact>
        <SC.ContactText>Contact Us</SC.ContactText>
        <SC.ContactWrapper>
          <SC.Location>
            <SC.LocIconContainer>
              <SC.LocIcon src={locDot} alt="위치 아이콘" />
            </SC.LocIconContainer>
            <SC.LocTextContainer>
              <SC.LocText>부산광역시</SC.LocText>
            </SC.LocTextContainer>
          </SC.Location>
          <SC.Location>
            <SC.LocIconContainer>
              <SC.LocIcon src={email} alt="email 아이콘" />
            </SC.LocIconContainer>
            <SC.LocTextContainer>
              <SC.LocText>support@figma.com</SC.LocText>
            </SC.LocTextContainer>
          </SC.Location>
          <SC.Location>
            <SC.LocIconContainer>
              <SC.LocIcon src={phone} alt="phone 아이콘" />
            </SC.LocIconContainer>
            <SC.LocTextContainer>
              <SC.LocText>+82 010-1234-1234</SC.LocText>
            </SC.LocTextContainer>
          </SC.Location>
        </SC.ContactWrapper>
      </SC.Contact>
    </SC.FooterContainer>
  );
};

export default Footer;
