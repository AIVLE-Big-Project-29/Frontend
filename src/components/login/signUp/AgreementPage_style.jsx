import styled from 'styled-components';

export const AgreementPageContainer = styled.div`
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(0deg, #f7f9fb, #f7f9fb), #ffffff;
`;

export const AgreementContainer = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding:20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const AgreementTitle = styled.h1`
  color: rgba(127, 202, 33, 0.8);
  font-size: 24px;
  margin-bottom: 20px;
`;

export const AgreementSection = styled.div`
  margin-bottom: 15px;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const AgreementLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 16px;
  color: #333;
  height: 3px;
`;

export const AgreementCheckbox = styled.input`
  margin-right: 10px;
`;

export const AgreementTextarea = styled.textarea`
  width: 95%;
  height: 65px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 10px;
  resize: none;
`;

export const AgreementButton = styled.button`
  width: 100%;
  padding: 15px;
  background: rgba(127, 202, 33, 0.8);
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;

  &:disabled {
    background-color: #999;
    cursor: not-allowed;
  }
`;
