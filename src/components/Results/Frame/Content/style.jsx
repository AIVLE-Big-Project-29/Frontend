import styled from 'styled-components';
import { Fonts } from '../Font';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0px;
  gap: 80px;
  min-height: 612.4px; /* 최소 높이 설정 */
  background-color: #ffffff; /* Content 배경색 설정 */
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  box-sizing: border-box; /* Padding을 포함한 전체 크기를 지정 */
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0px;
`;

export const Header = styled.div`
  width: 250px;
  padding: 25px 5px;
  background-color: #ffffff;
  text-align: center;
  ${Fonts['font-regular-20']};
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  gap: 12px;
`;

export const Main = styled.div`
  display: flex;
  justify-content: center;
  padding: 0px;
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
  background-color: #f7f9fb;
  padding: 4px;
  white-space: pre-wrap;
  color: black;
`;

export const IconTitle = styled.p`
  width: 139px;
  height: 63px;
  margin: 0;
  /* left: calc(50% - 139px / 2 + 40px);
  top: calc(50% - 64px / 2); */
  ${Fonts['font-semibold-24']}
  font-size: 30px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #355342;
`;

export const IconImage1 = styled.img`
  width: 84px;
  height: 84px;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  margin-left: -60px;
`;

export const IconImage2 = styled.img`
  width: 32px;
  height: 32px;
  object-fit: cover;
  border-radius: 4px;
`;

export const Section1 = styled.section`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
`;

export const SectionTitle = styled.h2`
  width: 180px;
  height: 24px;
  color: #1c1c1c;
  margin-bottom: 1%;
  text-align: center;
  position: relative;
  top: -1%;
  right: -1%;
  ${Fonts['font-regular-18']};
  white-space: nowrap;
`;
