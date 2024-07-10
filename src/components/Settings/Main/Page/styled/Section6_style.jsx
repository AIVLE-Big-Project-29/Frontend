import styled from 'styled-components';
import { Fonts } from '../../../../../tokens/Font';

export const Section6 = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  align-content: flex-start;
  padding: 8px 12px;
  gap: 16px;

  width: 848px;
  height: 56px;

  border-radius: 8px;

  flex: none;
  order: 10;
  align-self: stretch;
  flex-grow: 0;
`;

export const SectionTitle6 = styled.button`
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

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;

  background: none;
  border: none;
  cursor: pointer;
  text-align: left;

  &:hover {
    text-decoration: underline;
  }
  ${Fonts['font-regular-14']};
`;

export const SectionContent6 = styled.div`
  width: 788px;

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  padding: 0px 12px;
  ${Fonts['font-rgba-14']};
`;

export const IconButton = styled.img`
  margin-left: auto; /* 이미지를 오른쪽 끝에 위치하도록 설정 */
  width: 20px;
  height: 20px;
  border-radius: 8px;

  flex: none;
  order: 2;
  flex-grow: 0;
  cursor: pointer; /* 버튼에 커서 추가 */
`;
