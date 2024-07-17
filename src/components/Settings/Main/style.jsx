import styled from 'styled-components';

export const MainContent = styled.div`
  width: 1176px;
  height: 484px;
  display: flex;
  align-items: center;
  flex-direction: row;
  backdrop-filter: blur(20px);
  justify-content: center;
`;

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 14px;
  gap: 4px;
  width: 224px;
  height: 484px;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.4)
    ),
    rgba(255, 255, 255, 0.8);
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;
