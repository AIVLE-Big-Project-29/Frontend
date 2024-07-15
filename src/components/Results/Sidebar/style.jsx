import styled from 'styled-components';

export const FContainer = styled.div`
  display: flex;
  flex-direction: column; /* 세로 방향으로 정렬 */
  height: 100vh; /* 전체 높이를 차지 */
  width: 100%; /* 전체 너비를 차지 */
  background-color: #ffffff; /* 전체 배경색 설정 */
`;

export const Frame1Container = styled.div`
  height: 70%; /* Frame1의 높이를 70%로 설정 */
  width: 100%; /* 전체 너비를 차지 */
  background-color: #ffffff; /* Frame1 배경색 설정 */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  overflow-y: auto; /* 콘텐츠가 많을 경우 스크롤 가능하도록 설정 */
`;

export const Frame2Container = styled.div`
  height: 30%; /* Frame2의 높이를 30%로 설정 */
  width: 100%; /* 전체 너비를 차지 */
  background-color: #ffffff; /* Frame2 배경색 설정 */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;
`;
