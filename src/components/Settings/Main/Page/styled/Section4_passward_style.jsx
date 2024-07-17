import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  max-width: 300px;  // 너비를 줄임
  height: 30vh; // 세로 길이를 늘림
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

export const Title = styled.h2`
  text-align: center;
  margin-top: -0px;
  margin-bottom: 20px;
  font-size: 20px;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 20px;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

export const Message = styled.div`
  background-color: #f8d7da;
  color: #721c24;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 10px;
  text-align: center;
  font-size: 14px;
`;

export const PasswordChangeForm = styled.form`
  display: flex;
  flex-direction: column;
  flex-grow: 1;  // 폼이 전체 높이를 차지하게 함
  justify-content: center; // 폼의 내용을 세로로 가운데 정렬
`;

export const PasswordInput = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const PasswordSubmitButton = styled.button`
  padding: 10px;
  font-size: 16px;
  color: white;
  background: rgba(127, 202, 33, 0.8);
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
