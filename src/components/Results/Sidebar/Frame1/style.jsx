// Frame1Style.jsx
import styled from 'styled-components';

export const Frame1Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: transparent; /* 배경색 없음 */
`;

export const SideBar = styled.div`
  // 사이드바 프로필, 페이지 링크
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  gap: 8px;
  isolation: isolate;
  width: 17vw;
  height: 100%;
  /* border-right: 1px solid rgba(28, 28, 28, 0.1); */
`;
