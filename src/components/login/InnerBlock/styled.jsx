import styled from 'styled-components';
import { Fonts } from '../../../tokens/Font.js';

export const InnerFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 24px;
  width: 313px;
  height: 448px;
  border: none;
  outline: none;
  &:focus :active {
    border: none;
    outline: none;
  }
`;

export const Logo = styled.div`
  width: 230px;
  height: 180px;
`;

export const LogoImg = styled.img`
  width: -webkit-fill-available;
  height: -webkit-fill-available;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;

  width: 83px;
  height: 32px;

  border-radius: 8px;
`;

export const SignInText = styled.p`
  width: 83px;
  height: 32px;

  ${Fonts['font-semibold-24']}
  color: #355342;
  font-weight: 700;
`;

export const Partition = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  width: 313px;
  height: 0px;

  border: 1px solid rgba(28, 28, 28, 0.1);
`;

export const Frame = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 5px;
  width: 313px;
  height: 204px;
  border: none;
  outline: none;
  &:focus :active {
    border: none;
    outline: none;
  }
`;

export const InputId = styled.input`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 16px 20px;
  gap: 4px;
  width: 313px;
  height: 56px;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid
    ${(props) => (props.hasError ? 'red' : 'rgba(28, 28, 28, 0.1)')};
  border-radius: 16px;
  color: black;
  outline: none;
  &:focus {
    outline: none;
    border-color: ${(props) =>
      props.hasError ? 'red' : 'rgba(28, 28, 28, 0.1)'};
  }
`;

export const InputBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 313px;
  height: 60px;
  min-height: 56px;
  background: linear-gradient(0deg, #375739, #375739), #1c1c1c;
  border-radius: 16px;
  &:hover {
    background: #213f36;
  }
  border: none;
  outline: none;
  &:focus :active {
    border: none;
    outline: none;
  }
`;

export const BtnText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;

  width: 160px;
  height: 28px;

  border-radius: 8px;
`;

export const Text = styled.p`
  ${Fonts['font-regular-18']}

  display: flex;
  align-items: center;
  text-align: center;
  font-feature-settings:
    'ss01' on,
    'cv01' on;

  color: #ffffff;
`;

export const UnderBarFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 0px;
  gap: 16px;

  width: 271px;
  height: 20px;
`;

export const UnderBarSign = styled.p`
  width: 52px;
  height: 20px;
  ${Fonts['font-regular-14']}
  color: #355342;
`;

export const UnderBarForgot = styled.p`
  /* Forgot Password */
  width: 112px;
  height: 20px;
  ${Fonts['font-regular-14']}
  color: #355342;
`;

export const UnderBarContact = styled.p`
  /* Contact Us */
  width: 75px;
  height: 20px;
  ${Fonts['font-regular-14']}
  color: #355342;
`;

export const ErrorIdText = styled.p`
  // 아이디 안내 및 에러 출력
  width: 300px;
  height: 20px;
  ${Fonts['font-regular-14']}
  color: red;
  margin: 0;
`;

export const ErrorPwText = styled.p`
  // 비번 안내 및 에러 출력
  width: 300px;
  height: 20px;
  ${Fonts['font-regular-14']}
  color: red;
  margin: 0;
`;
