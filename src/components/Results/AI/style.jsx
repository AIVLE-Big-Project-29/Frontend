import styled from 'styled-components';
import { Fonts } from '../../../tokens/Font';

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
  padding: 15px;
  border: 2px dashed rgba(127, 202, 33, 0.8);
  border-radius: 8px;
  width: 70%;
  box-sizing: border-box;
`;

export const DragDropArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 150px;
  border: 2px dashed #375739;
  border-radius: 8px;
  background-color: #f9f9f9;
  max-width: 1000px;
  width: 80%;
  margin: 0 auto;
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
  width: 230px;
  color: #333;
  overflow: hidden;
  white-space: pre-wrap;
  ${Fonts['font-regular-14']}
  font-size: 15px;
`;

export const ChartContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 25px;
`;

export const BtnContainer = styled.div`
  height: 40px;
`;

export const ImgUploadContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ExampleContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 2px dashed rgba(127, 202, 33, 0.8);
  border-radius: 8px;
`;

export const ExampleText = styled.p`
  margin: 0;
  ${Fonts['font-regular-18']}
  font-size: 17px;
  font-weight: 700;
  color: #355342;
  width: 460px;
  display: flex;
  justify-content: center;
`;

export const ExampleImg = styled.img`
  height: 80%;
`;
