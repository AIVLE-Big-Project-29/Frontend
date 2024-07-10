import styled from 'styled-components';
import { Fonts } from '../../../tokens/Font';

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 8px;
  gap: 16px;

  width: 1176px;
  height: 58px;

  /* Inside auto layout */
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

export const IconImage = styled.img`
  width: 40px; // 아이콘의 크기를 조정합니다
  height: 40px;
  margin-right: 8px; // 텍스트와 아이콘 사이의 간격을 조정합니다
`;

export const TitleText = styled.div`
  ${Fonts['font-semibold-48']};
  margin: 0 auto; /* 텍스트를 중앙에 정렬 */
  text-align: center; /* 텍스트를 가운데 정렬 */
`;

export const IconButton = styled.img`
  width: 40px;
  height: 40px;

  background: linear-gradient(0deg, rgba(55, 87, 57, 0.05), rgba(55, 87, 57, 0.05)), rgba(28, 28, 28, 0.05);
  border-radius: 12px;

  /* Inside auto layout */
  flex: none;
  order: 2;
  flex-grow: 0;

  cursor: pointer; /* 버튼에 커서 추가 */
`;
