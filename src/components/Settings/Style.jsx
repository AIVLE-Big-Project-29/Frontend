import styled from 'styled-components';

export const OuterContainer = styled.div`
  width: 100vw; /* Viewport width */
  height: 100vh; /* Viewport height */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0; /* 전체 배경색 */
`;

export const Container = styled.div`
  width: 1440px;
  height: 700px;
  background-color: #ffffff;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Frame = styled.div`
  width: 1176px;
  height: 570px;
  display: flex;
  flex-direction: column;
  gap: 28px;
  position: absolute;
  background-color: white; // 선택적: 배경색 설정
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 58px;
  display: flex;
  align-items: center;
  padding: 0px 8px;
  gap: 16px;
  justify-content: center;
`;

export const MainContainer = styled.div`
  width: 100%;
  height: 484px;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(20px);
`;