import styled from 'styled-components';
import { Fonts } from '../../../../tokens/Font';

export const DetailModalContainer = styled.div`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 900px;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);

`;

export const DetailModalContent = styled.div`
  position: relative;
  background-color: #fefefe;
  margin: 15% auto;
  padding: 0px;
  border: 1px solid #888;
  width: 500px;
  height: 50%;
  border-radius: 5px;
`;

export const DetailModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px;

  border-radius: 4px;
  width: 100%;
  height: 33px;
  left: 0px;
  top: 0px;

  background: rgba(108, 185, 162, 0.7);
`;

export const DetailTitleText = styled.div`
  ${Fonts['font-regular-12']};
  margin: 10px;
`;

export const DetailCloseButton = styled.span`
  font-size: 28px;
  font-weight: bold;
  &:hover,
  &:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }

  position: absolute;
  left: 94.5%;

`;

export const DetailModalBody = styled.div`
  padding: 2px 16px;
  height: 365px;
`;

export const DetailModalFooter = styled.div`
  padding: 2px 16px;
  display: flex;
  justify-content: flex-end;
`;

export const DetailDeleteButton = styled.button`
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  // justify-content: flex-start;

  // display: flex;
  // align-items: center;
  padding: 0px 10px 0px 15px;

  width: 84px;
  height: 28px;
  left: 0px;
  top: 0px;
  border-radius: 200px;
`;

export const DetailModifyButton = styled.button`
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  // justify-content: flex-start;

  // display: flex;
  // align-items: center;
  padding: 0px 10px 0px 15px;

  width: 84px;
  height: 28px;
  left: 0px;
  top: 0px;
  border-radius: 200px;
`;

export const DetailSaveButton = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  y-content: flex-start;

  // display: flex;
  // align-items: center;
  padding: 0px 10px 0px 15px;

  width: 84px;
  height: 28px;
  left: 0px;
  top: 0px;

  background: #375739;
  border-radius: 200px;

`;

export const DetailTitleWrapper = styled.div`
  ${Fonts['font-regular-16']};
  position: relative;
  padding-top: 10px;
  width: 100%;
  height: 35px;
  padding: 1px; // 패딩 추가
  // border-radius: 3px; // 모서리 둥글게
  // border: 1px solid #999;
  margin-bottom: 10px;
`;

export const DetailContentWrapper = styled.div`
  ${Fonts['font-regular-12']};
  position: relative;
  width: 100%;
  height: 75%;
  margin-top: 0px;
  padding: 1px; // 패딩 추가
  // border-radius: 3px; // 모서리 둥글게
  // border: 1px solid #999;
`;

export const Th = styled.th`
  // box-sizing: border-box;
  // padding: 8px 12px;
  gap: 4px;
  /* width: 214.5px;
  min-width: 80px;
  max-width: 220px; */
  height: 5px;
  min-height: 40px;
  border-top: 1px solid rgba(28, 28, 28, 0.2);
  border-bottom: 1px solid rgba(28, 28, 28, 0.2);
  border-radius: 0px;
  ${Fonts['font-regular-12']}
  color: rgba(28, 28, 28, 0.4);
  text-align: justify;
  accent-color: black;
  width: 86.8%;
`;


export const TitleArea = styled.input`
  width: 100%;
  height: 100%;
  border: 1px solid #F3F5F6;
  padding: 5px;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  color: #747789;
`;

export const ContentArea = styled.textarea`
  width: 100%;
  height: 100%;
  border: 1px solid #F3F5F6;
  padding: 5px;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  color: #747789;
`;
