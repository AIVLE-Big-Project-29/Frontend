import styled from 'styled-components';
import { Fonts } from '../../tokens/Font';

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
  width: 17vw;
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
  box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  box-sizing: border-box; /* Padding을 포함한 전체 크기를 지정 */
  overflow-y: auto;
`;

export const Map = styled.div`
  width: 80%;
  height: 1100px;
  margin: 5px;
`;

export const CaptureBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 95px;
  height: 50px;
  background: linear-gradient(0deg, #375739, #375739), #1c1c1c;
  border-radius: 8px;
  padding: 0;
  &:hover {
    background: #213f36;
  }
`;

export const CaptureBtnInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  width: 70px;
  height: 45px;
  border-radius: 8px;
`;

export const CaptureBtnText = styled.p`
  ${Fonts['font-semibold-20']}
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  margin: 0;
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

export const UploadContainer = styled.div`
  width: 100%;
  height: 320px;
  gap: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ImgResultContainer = styled.div`
  height: 700px;
`;

export const expContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const expTitle = styled.h2`
  ${Fonts['font-semibold-30']}
  font-weight: 500;
  font-size: 27px;
  height: 36px;
`;

export const expText = styled.p`
  margin: 0;
`;

export const QuestionIconBtn = styled.button`
  width: 20px;
  height: 20px;
  padding: 0;
  background-color: transparent;
`;

export const QuestionIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const ExpTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
`;
