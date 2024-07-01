import styled from 'styled-components';
import { Fonts } from '../../tokens/Font';

export const SignIn = styled.div`
  position: relative;
  width: 1440px;
  height: 100vh;

  background: linear-gradient(0deg, #f7f9fb, #f7f9fb), #ffffff;
  border-radius: 24px;
`;

export const Header = styled.header`
  position: absolute;
  left: 0px;
  right: 0px;
  top: 30px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  align-content: flex-end;
  padding: 0px;
  gap: 8px;

  margin: 0 auto;
  width: 1377px;
  height: 28px;

  border-radius: 8px;
`;

export const SignInBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  gap: 4px;

  width: 66px;
  height: 28px;

  background: linear-gradient(0deg, #375739, #375739), #1c1c1c;
  border-radius: 8px;
`;

export const SignUpBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  gap: 4px;

  width: 66px;
  height: 28px;

  background: rgba(28, 28, 28, 0.05);
  border-radius: 8px;
`;

export const SignUp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;

  width: 50px;
  height: 20px;

  border-radius: 8px;
`;

export const SignUpText = styled.p`
  /* Text */
  width: 44px;
  height: 20px;

  ${Fonts['font-regular-14']}

  display: flex;
  align-items: center;
  text-align: center;
  font-feature-settings:
    'ss01' on,
    'cv01' on;

  color: #1c1c1c;
`;

export const SignInText = styled.p`
  /* Text */
  width: 44px;
  height: 20px;

  ${Fonts['font-regular-14']}

  display: flex;
  align-items: center;
  text-align: center;
  font-feature-settings:
    'ss01' on,
    'cv01' on;

  color: #ffff;
`;

export const MainBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  gap: 24px;
  isolation: isolate;

  position: absolute;
  width: 680px;
  height: 700px;
  left: calc(50% - 680px / 2 + 0.5px);
  top: calc(50% - 700px / 2);

  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.4)
    ),
    rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 32px;
`;

export const MainBlockHeader = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: end;
  align-items: center;
  align-content: flex-start;
  padding: 0px;
  gap: 8px;

  position: absolute;
  width: 680px;
  height: 40px;
  left: 24px;
  top: 24px;

  border-radius: 8px;

  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
  z-index: 1;
`;

export const CloseBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 8px;

  width: 40px;
  height: 40px;

  border-radius: 12px;
  background-color: transparent;
`;

export const IconSet = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;

  width: 20px;
  height: 20px;

  border-radius: 8px;
`;

export const CloseIcon = styled.img``;
