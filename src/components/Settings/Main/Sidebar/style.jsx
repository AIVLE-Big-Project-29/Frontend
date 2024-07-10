import styled from 'styled-components';
import { Fonts } from '../../../../tokens/Font';

export const SidebarContainer = styled.div`
  display: flex;
  justify-content: center; // 수평 중앙 정렬
  align-items: flex-start; // 수직 상단 정렬
  height: 100vh; // 뷰포트 높이 100%
  padding-top: 16px; // 상단에 여백 추가
`;

export const SidebarItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  width: 232px;
  height: 56px;

  background: linear-gradient(0deg, rgba(55, 87, 57, 0.05), rgba(55, 87, 57, 0.05)), rgba(28, 28, 28, 0.05);
  border-radius: 16px;

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  ${Fonts['font-regular-14']};
`;

export const SidebarIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;
