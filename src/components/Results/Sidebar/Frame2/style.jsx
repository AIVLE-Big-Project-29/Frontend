// Frame2Style.jsx
import styled from 'styled-components';
import { Fonts } from './Font';

export const FrameContainer = styled.div`
  width: 100%;
  height: auto; /* 스크롤을 없애기 위해 auto 설정 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  gap: 1px;
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

export const SidebarContent = styled.button`
  width: 80%;
  height: 24%;
  padding: 2px;
  background-color: white;
  display: flex;
  align-items: center;
  ${Fonts['font-regular-14']};
`;

export const Button = styled.p`
  padding: 10px 20px;
  cursor: pointer;
  margin-bottom: 10px;
  padding: 0;
  border: none;
  border-radius: 5px;
  ${Fonts['font-regular-14']};
`;

export const IconImage = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;
