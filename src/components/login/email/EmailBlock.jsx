import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import * as SC from '../styled';
import CloseBtn from '../CloseBtn';
import ArrowBtn from './ArrowBtn';
import EmailInner from './EmailInner';
import { EMAILSENDURL, SIGNUPURL } from '/src/tokens/Urls.js';

const EmailBlock = ({ signUpInfo }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isActive, setIsActive] = useState(false); // 타이머 활성화 상태
  const [seconds, setSeconds] = useState(180); // 3분 = 180초

  useEffect(() => {
    // 타이머가 활성화되고 0보다 클 때만 동작
    if (isActive && seconds > 0) {
      const interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1); // 1초씩 감소
      }, 1000);

      // 컴포넌트 언마운트 시 타이머 클리어
      return () => clearInterval(interval);
    } else if (seconds === 0) {
      setIsActive(false); // 타이머가 종료되면 비활성화
    }
  }, [isActive, seconds]);

  // 남은 시간을 분과 초로 변환
  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // 타이머 시작 함수
  const startTimer = () => {
    setIsActive(true); // 타이머 활성화
  };

  // 화살표 버튼 클릭시, 회원가입 페이지로 돌아가는 함수
  const clickHandler = () => {
    navigate('/signup');
  };

  // 이메일 입력 함수
  const emailInputHandler = (event) => {
    setEmail(event.target.value);
  };

  // 이메일 인증 보내는 함수
  const emailSendHandler = async () => {
    try {
      // 타이머 시작
      startTimer();

      const response = await axios.post(EMAILSENDURL, {
        email: email,
      });
      alert('이메일 인증 성공', response.data);
    } catch (error) {
      console.error('이메일 인증 실패', error);
      alert('이메일 인증 실패');
    }
  };

  // 이메일 인증 성공시, response 확인 후,
  // 아이디와 비밀번호 서버로 보내는 함수
  const signUpHandler = async () => {
    try {
      const infoResponse = await axios({
        method: 'post',
        url: SIGNUPURL,
        withCredentials: false,
        data: {
          username: signUpInfo.Id,
          password: signUpInfo.Pw,
          email: email,
        },
      });
      alert(`회원가입 성공!
        로그인을 다시 해주세요`);
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
        formatTime={formatTime}
        seconds={seconds}
        isActive={isActive}
      />
    </SC.MainBlock>
  );
};

export default EmailBlock;
