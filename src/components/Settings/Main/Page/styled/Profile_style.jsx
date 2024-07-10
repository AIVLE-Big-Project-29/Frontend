import styled from 'styled-components';
import { Fonts } from '../../../../../tokens/Font';

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 28px 24px;
  gap: 8px;
  width: 896px;
  height: 484px;
  background: #FFFFFF;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 1;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  align-content: flex-start;
  padding: 8px 12px;
  gap: 16px;

  /* 내부 자동 레이아웃 설정 */
  flex: none;                  /* 자식 요소의 flex 속성 해제 */
  order: 0;                    /* 요소의 배치 순서 설정 */
  align-self: stretch;         /* 자식 요소의 세로 방향 크기를 부모에 맞춤 */
  flex-grow: 0;                /* 자식 요소가 추가 공간을 차지하지 않도록 설정 */
`;

export const ProfileImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 16px;
`;

export const ProfileText = styled.div`
  ${Fonts['font-regular-18']};
`;

export const ProfileEmail = styled.div`
  ${Fonts['font-rgba-14']};
`;
