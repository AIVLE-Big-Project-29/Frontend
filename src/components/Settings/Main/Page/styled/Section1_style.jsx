import styled from 'styled-components';
import { Fonts } from '../../../../../tokens/Font';

export const Section1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between; // 수평 정렬
  padding: 8px 12px;
  gap: 16px;

  width: 848px;
  height: 36px;

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

export const SectionTitle1 = styled.h2`
  display: flex;
  align-items: center; // 세로 중앙 정렬
  padding: 0px;

  flex: none;
  order: 0;
  flex-grow: 1;
  ${Fonts['font-regular-14']};
`;

export const SectionContentWrapper1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center; // 세로 중앙 정렬
  gap: 4px;

  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const SectionContent1 = styled.p`
  display: flex;
  align-items: center; // 세로 중앙 정렬
  padding: 0px;
  gap: 4px;
  
  flex: none;
  order: 0;
  flex-grow: 0;
  ${Fonts['font-rgba-14']};
`;

export const IconImage = styled.img`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;

width: 20px;
height: 20px;

border-radius: 8px;

/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;
`;