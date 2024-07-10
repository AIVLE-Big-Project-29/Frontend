import styled from 'styled-components';
import { Fonts } from '../../../../../tokens/Font';

export const Section4 = styled.div`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  align-content: flex-start;
  padding: 8px 12px;
  gap: 16px;

  width: 848px;
  height: 56px;

  border-radius: 8px;

  background: rgba(28, 28, 28, 0.05);
  border-radius: 8px;

  flex: none;
  order: 5;
  align-self: stretch;
  flex-grow: 0;
`;

export const SectionSubtitle4 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px 12px;

  width: 788px;
  height: 20px;

  border-radius: 8px;

  flex: none;
  order: 3;
  align-self: stretch;
  flex-grow: 0;
  ${Fonts['font-regular-14']};
`

export const PasswordField = styled.div`
  width: 788px;
  height: 12px;
  padding: 0px 12px;
  border-radius: 4px;
  margin-bottom: 16px;
  ${Fonts['font-rgba-14']};
`;

export const IconButton = styled.img`
  margin-left: auto;
  width: 20px;
  height: 20px;
  border-radius: 8px;
  flex: none;
  order: 2;
  flex-grow: 0;

  cursor: pointer; /* 버튼에 커서 추가 */
`;

export const SectionContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;

  flex: none;
  order: 1;
  flex-grow: 0;
`;