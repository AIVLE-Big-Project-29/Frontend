// Frame2Style.jsx
import styled from 'styled-components';
import { Fonts } from './Font';

export const FrameContainer = styled.div`
  width: 100%;
  height: auto; /* 스크롤을 없애기 위해 auto 설정 */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Sidebar = styled.div`
  width: 100%;
  height: auto; /* 스크롤을 없애기 위해 auto 설정 */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Section = styled.div`
  width: 100%;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background-color: #ffffff; /* 섹션 배경색 설정 */
  border-radius: 5px;
`;

export const SidebarContent1 = styled.div`
  width: 100%;
  height: 10px;
  display: flex;
  align-items: center;
  ${Fonts['font-regular-14']};
`;

export const SidebarContent2 = styled.div`
  width: 100%;
  height: 10px;
  display: flex;
  align-items: center;
  ${Fonts['font-regular-14']};
`;

export const SidebarContent3 = styled.div`
  width: 100%;
  display: flex;
  height: 10px;
  align-items: center;
  ${Fonts['font-regular-14']};
`;

export const SidebarContent4 = styled.div`
  width: 100%;
  height: 10px;
  display: flex;
  align-items: center;
  ${Fonts['font-regular-14']};
`;

export const Button = styled.button`
  padding: 10px 20px; /* 상대적인 값으로 수정 */
  cursor: pointer;
  margin-bottom: 10px; /* 상대적인 값으로 수정 */
  border: none;
  border-radius: 5px;
  ${Fonts['font-regular-14']};
`;


export const IconImage3 = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;
