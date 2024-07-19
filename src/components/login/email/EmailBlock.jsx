import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import * as SC from '../styled';
import CloseBtn from '../CloseBtn';
import ArrowBtn from './ArrowBtn';
import EmailInner from './EmailInner';
import { useState } from 'react';

const EmailBlock = ({ signUpInfo }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  // 화살표 버튼 클릭시, 회원가입 페이지로 돌아감
  const clickHandler = () => {
    navigate('/signup');
  };

  const emailInputHandler = (event) => {
    setEmail(event.target.value);
    console.log(event.target.value);
  };

  const emailSendHandler = async () => {
    try {
      const response = await axios.post(
        'http://192.168.103.7:8000/user_api/verify-email/',
        {
          email: email,
        }
      );
      console.log('이메일 인증 성공', response.data);
    } catch (error) {
      console.error('이메일 인증 실패', error);
    }
  };

  const signUpHandler = async () => {
    // 이메일 인증 성공시, response 확인 후,
    // 아이디와 비밀번호 서버로 보냄
    try {
      console.log(signUpInfo.Id, signUpInfo.Pw);

      const infoResponse = await axios({
        method: 'post',
        url: 'http://192.168.103.7:8000/user_api/register/',
        withCredentials: false,
        data: {
          username: signUpInfo.Id,
          password: signUpInfo.Pw,
          email: email,
        },
      });
      console.log('id, pw 서버 전송 성공', infoResponse.data);

      navigate('/');
    } catch (error) {
      console.error('회원가입 실패', error);
    }
  };

  return (
    <SC.MainBlock>
      <SC.MainBlockHeader>
        <ArrowBtn onClick={clickHandler} />
        <CloseBtn />
      </SC.MainBlockHeader>
      <EmailInner
        onChange={emailInputHandler}
        onClick={emailSendHandler}
        onSignUp={signUpHandler}
      />
    </SC.MainBlock>
  );
};

export default EmailBlock;
