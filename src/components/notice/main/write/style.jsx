import styled from 'styled-components';

export const ModalContainer = styled.div`
  display: ${props => props.isOpen ? 'block' : 'none'};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);
`;

export const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 50%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
  margin-bottom: 20px;
`;

export const ModalBody = styled.div`
  flex: 1;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid #ddd;
  padding-top: 10px;
  margin-top: 20px;
`;

export const CloseButton = styled.button`
  color: #aaa;
  font-size: 28px;
  font-weight: bold;
  background: none;
  border: none;

  &:hover,
  &:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const SaveButton = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  margin: 10px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;