import styled from 'styled-components';
import { Fonts } from '../Font';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
  min-height: 612.4px; /* 최소 높이 설정 */
  background-color: #ffffff; /* Content 배경색 설정 */
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1); /* Content 그림자 설정 */
  border-radius: 8px;
  box-sizing: border-box; /* Padding을 포함한 전체 크기를 지정 */
`;

export const Header = styled.div`
  width: 100%;
  padding: 40px 0;
  background-color: #ffffff; /* Header 배경색 설정 */
  text-align: center;
  ${Fonts['font-regular-20']};
  margin-bottom: 20px; /* Header와 Main 사이의 마진 */
`;

export const Main = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 400px;
  padding: 30px;
  background-color: #ffffff; /* Main 배경색 설정 */
  border-radius: 8px;
  flex: 1; /* Main이 Content의 나머지 공간을 차지하도록 설정 */
  box-sizing: border-box; /* Padding을 포함한 전체 크기를 지정 */
`; 

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  text-align: center;
  ${Fonts['font-regular-14']};
`;

export const ListItem = styled.li`
  margin-bottom: 1%;
  margin-bottom: 8px;
  border-radius: 8px;
  background-color: #F7F9FB;
  padding: 4px;
`;

export const IconImage1 = styled.img`
  width: 100%;
  max-width: 40px; /* 최대 너비를 설정하여 이미지 깨짐 방지 */
  height: auto;
  object-fit: cover;
  border-radius: 8px;
`;

export const IconImage2 = styled.img`
  width: 100%;
  max-width: 40px; /* 최대 너비를 설정하여 이미지 깨짐 방지 */
  height: 40px;
  object-fit: cover;
  border-radius: 4px;
`;

export const Section1 = styled.section`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 5%;
`;

export const SectionTitle = styled.h2`
  font-size: 1.2em;
  margin-bottom: 1%;
  text-align: center;
  position: relative;
  top: -1%;
  right: -1%;
  ${Fonts['font-regular-18']};
`;
