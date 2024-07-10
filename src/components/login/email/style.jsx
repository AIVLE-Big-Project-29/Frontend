import styled from 'styled-components';
import { Fonts } from '../../../tokens/Font.js';

export const Frame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0px;
  gap: 10px;

  width: 313px;
  height: 448px;
`;

export const EmailIconWrapper = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EmailIcon = styled.img`
  color: #213f36;
`;

export const EmailText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  gap: 0px;
  width: 313px;
  height: 160px;
  border-radius: 8px;
`;

export const LargeText = styled.p`
  width: 313px;
  height: 32px;
  ${Fonts['font-semibold-24']}
  text-align: center;
  margin: 0;
  color: #355342;
`;

export const MidText = styled.p`
  width: 313px;
  height: 28px;
  ${Fonts['font-regular-18']}
  text-align: center;
  margin: 0;
  color: #355342;
`;

export const SmallText = styled.p`
  width: 313px;
  height: 40px;
  ${Fonts['font-regular-14']}
  text-align: center;
  margin: 0;
  color: #355342;
`;

export const EmailAuth = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  gap: 4px;
  width: 313px;
  height: 56px;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(28, 28, 28, 0.1);
  border-radius: 16px;
`;

export const InputEmail = styled.input`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 16px 20px;
  gap: 4px;
  width: 250px;
  height: 56px;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(28, 28, 28, 0.1);
  border-radius: 16px;
  color: black;
`;

export const SendEmailBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 52px;
  height: 36px;
  background: linear-gradient(0deg, #375739, #375739), #1c1c1c;
  border-radius: 8px;
  padding: 0;
  &:hover {
    background: #213f36;
  }
`;

export const EmailBtnInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  width: 60px;
  height: 28px;
  border-radius: 8px;
`;

export const EmailBtnText = styled.p`
  ${Fonts['font-regular-14']}
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  margin: 0;
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
  color: #ffffff;
`;
