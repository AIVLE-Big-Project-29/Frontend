import styled from 'styled-components';
import { Fonts } from '../../../../../tokens/Font';

export const Section5 = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  align-content: flex-start;
  padding: 0px 12px;
  gap: 16px;

  width: 848px;
  height: 56px;

  border-radius: 8px;

  flex: none;
  order: 10;
  align-self: stretch;
  flex-grow: 0;
`;

export const SectionTitle5 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px 12px;

  width: 788px;
  height: 20px;

  border-radius: 8px;

  font-feature-settings: 'ss01' on, 'cv01' on;
  color: #FF4747;

  &:hover {
    text-decoration: underline;
  }

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  ${Fonts['font-regular-14']};

  cursor: pointer; /* 클릭 가능한 버튼으로 변경 */
`;

export const SectionContent5 = styled.div`
  width: 788px;
  height: 16px;
  padding: 0px 12px;
  font-feature-settings: 'ss01' on, 'cv01' on;

  color: rgba(28, 28, 28, 0.4);

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  ${Fonts['font-rgba-14']};
`;

export const IconButton = styled.img`
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
  order: 0;
  flex-grow: 0;
  cursor: pointer; /* 버튼에 커서 추가 */
`;
