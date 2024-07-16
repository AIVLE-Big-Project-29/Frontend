import styled from 'styled-components';
import { Fonts } from '../../../../tokens/Font';

export const ModalContainer = styled.div`
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

export const ModalContent = styled.div`
  position: relative;
  background-color: #fefefe;
  margin: 15% auto;
  padding: 0px;
  border: 1px solid #888;
  width: 500px;
  height: 50%;
  border-radius: 5px;
`;

export const ModalHeader = styled.div`
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

export const TitleText = styled.div`
  ${Fonts['font-regular-12']};
  margin: 10px;
`;

export const CloseButton = styled.span`
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

export const ModalBody = styled.div`
  padding: 2px 16px;
  height: 365px;
`;

export const ModalFooter = styled.div`
  padding: 2px 16px;
  display: flex;
  justify-content: flex-end;
`;

export const SaveButton = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  // &:hover {
  //   background-color: #375739;
  // }
  // justify-content: flex-start;

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

export const TitleInputWrapper = styled.div`
  position: relative;
  padding-top: 10px;
  width: 100%;
  height: 35px;
`;

export const ContentInputWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 75%;
  margin-top: 0px;
`;


export const Input = styled.input`
  width: 100%;
  height: 100%;
  border: 1px solid #F3F5F6;
  padding: 5px;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  color: #747789;
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 100%;
  border: 1px solid #F3F5F6;
  padding: 5px;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  color: #747789;
`;
