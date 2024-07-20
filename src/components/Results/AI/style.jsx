import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 70%;
`;

export const MapContainer = styled.div`
  float: left;
  width: 70%;
`;

export const MapWrapper = styled.div`
  width: 100%;
  height: 700px;
`;

export const Sidebar = styled.div`
  float: left;
  width: 40%;
`;

export const SidebarHeader = styled.header`
  margin: 20px 10px;
`;

export const SidebarContent = styled.div`
  height: 700px;
  padding: 20px;
`;

export const Form = styled.form``;

export const ResultDiv = styled.div`
  max-height: 300px;
  overflow-y: auto;
  ul {
    margin-bottom: 10px;
  }
`;

export const DongInputContainer = styled.div`
  padding-top: 20px;
`;

export const Label = styled.label`
  font-weight: bold;
`;

export const Input = styled.input`
  margin-left: 10px;
`;

export const Button = styled.button`
  margin-left: 10px;
`;

export const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  margin: 20px 0;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.4)
    ),
    rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(50px);
  text-align: center;
`;

export const FileInputLabel = styled.label`
  background: rgba(127, 202, 33, 0.8);
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  top: -20px; /* 위치를 더 위로 올림 */
  margin-right: 10px; /* 오른쪽 마진 추가 */
`;

export const FileInput = styled.input`
  display: none;
`;

export const SubmitFileButton = styled.button`
  background: #375739;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  position: relative;
  top: -20px; /* 위치를 더 위로 올림 */
`;

export const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px; /* 패딩 줄임 */
  border: 2px dashed rgba(127, 202, 33, 0.8);
  border-radius: 8px;
  width: 150%; /* 가로 너비를 줄임 */
  max-width: 800px; /* 최대 너비 줄임 */
  margin-left: -25%;
  box-sizing: border-box;
`;

export const DragDropArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 150px; /* 높이를 줄임 */
  border: 2px dashed #375739;
  border-radius: 8px;
  background-color: #f9f9f9;
  max-width: 1000px; /* 최대 너비 설정 */
  width: 80%; /* 너비를 늘림 */
  margin: 0 auto; /* 가운데 정렬 */
`;

export const FileInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const FileIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const FileName = styled.p`
  font-size: 16px;
  color: #333;
  min-width: 200px; /* 최소 너비 설정 */
  max-width: 300px; /* 최대 너비 설정 */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const CancelButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const CancelIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const UploadText = styled.p`
  font-size: 16px;
  color: #333;
  min-width: 300px; /* 최소 너비 설정 */
  max-width: 400px; /* 최대 너비 설정 */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ScatterContainer = styled.div`
  width: 90%;
  height: auto;
  padding: 10px;
  margin: 5px;
`;
