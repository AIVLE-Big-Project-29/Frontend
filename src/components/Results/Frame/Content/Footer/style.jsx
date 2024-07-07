import styled from 'styled-components';
import { Fonts } from '../../Font';

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 8px 12px;
  gap: 4px;
  width: 730px;
  height: 40px;
  background: #f7f9fb;
  border-radius: 16px;
  backdrop-filter: blur(50px);
`;

export const InputContents = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  align-content: flex-start;
  padding: 0px;
  gap: 8px;

  width: 720px;
  height: 24px;
  min-height: 24px;

  border-radius: 8px;
`;

export const Input = styled.input`
  // IconText
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  align-content: flex-start;
  padding: 0px;
  gap: 16px;

  width: 692px;
  height: 20px;

  border-radius: 8px;
  ${Fonts['font-regular-14']}
  color: rgba(28, 28, 28, 0.2);
  border: 0;
  background: #f7f9fb;
`;

export const Submit = styled.div`
  // IconSet
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;

  width: 20px;
  height: 20px;

  border-radius: 8px;
`;

export const SubmitBtn = styled.button`
  // PaperPlaneRight
  width: 20px;
  height: 20px;
  padding: 0;
`;

export const SubmitIcon = styled.img``;

export const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0px 40px;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.4)
    ),
    rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(50px);
  text-align: center;
`;
