import styled from 'styled-components';
import { Fonts } from '../../../tokens/Font';
import '../../../tokens/font.css';

export const FooterContainer = styled.div`
  // footer 전체
  position: relative;
  width: 1440px;
  height: 176px;
  background: #213f36;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SiteLogo = styled.div`
  // 로고
  position: absolute;
  width: 140px;
  height: 26px;
  left: 149px;
  top: 75px;

  padding: 0px;
  gap: 10px;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LogoContainer = styled.div`
  width: 30px;
  height: 30px;
`;

export const LogoTEXT = styled.p`
  width: 86px;
  height: 26px;

  ${Fonts['font-semibold-24']}
  color: #ffffff;
`;

export const Menu = styled.div`
  // footer 메뉴
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 40px;

  position: absolute;
  width: 400px;
  height: 20px;
  left: 518px;
  top: 79px;
`;

export const MenuText = styled.p`
  width: 73px;
  height: 20px;

  ${Fonts['font-regular-16']}
  line-height: 19px;

  margin: 0;
  display: flex;
  justify-content: center;

  color: #ffffff;
`;

export const Contact = styled.div`
  position: absolute;
  width: 234px;
  height: 130px;
  left: 1088px;
  top: 32px;
`;

export const ContactText = styled.p`
  // Contact Us 문구
  width: 100px;
  height: 21px;
  margin: 0;

  ${Fonts['font-semibold-20']}
  color: #ffffff;
`;

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 200px;
  height: 110px;
`;

export const Location = styled.div`
  width: 250px;
  height: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const LocIconContainer = styled.div`
  // icon 컨테이너
  width: 24px;
  height: 24px;
`;

export const LocIcon = styled.img`
  // 위치 아이콘
  height: 22px;
`;

export const LocTextContainer = styled.div`
  // 위치 텍스트
  width: 190px;
  height: 30px;
  margin-left: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const LocText = styled.p`
  // contact text
  margin: 0;
  ${Fonts['font-regular-14']}
  display: flex;
  align-items: center;

  color: #ffffff;
`;
