import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

export const SidebarContainer = styled.div`
  /* Sidebar */
  box-sizing: border-box;
  display: flex;
  padding: 0px;
  width: 19%;
  left: 0px;
  top: 0px;
  bottom: 0px;
  background: #ffffff;
`;

export const MainContent = styled.main`
  height: 100vh;
  width: 100vw;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 0px;
  gap: 10px;
  min-height: 612.4px; /* 최소 높이 설정 */
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  box-sizing: border-box; /* Padding을 포함한 전체 크기를 지정 */
`;
