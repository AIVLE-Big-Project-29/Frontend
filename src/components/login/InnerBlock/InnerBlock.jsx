import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import * as SC from './styled';
import InputIdPw from './InputIdPw';
import logo from '../../../assets/images/logo.svg';
import line from '../../../assets/images/Line.svg';
import UnderBar from './UnderBar';
import ErrorPage from '../../ErrorPage';

const InnerBlock = () => {
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({
    Id: '',
    Pw: '',
  });
  const [error, setError] = useState('');

  const validateForm = () => {
    if (!loginInfo.Id) {
      return 'Id를 입력하세요';
    }
    if (!loginInfo.Pw) {
      return 'Password를 입력하세요';
    }
    // if (loginInfo.Pw.length < 8) {
    //   return 'Password는 8자 이상이여야 합니다.';
    // }

    return null;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // id, pw 입력 확인
    const validateError = validateForm();
    // 입력 오류가 있으면 error 설정
    if (validateError) {
      setError(validateError);
    } else {
      setError('');

      try {
        console.log(loginInfo);

        // 입력 오류가 없으면 데이터 전송
        const response = await axios({
          method: 'post',
          url: 'http://192.168.0.6:8000/user_api/login/',
          withCredentials: false,
          data: {
            username: loginInfo.Id,
            password: loginInfo.Pw,
          },
        });
        console.log('로그인 성공', response.data);
        // 로그인 성공 후 웹 스토리지에 토큰 저장, 메인 페이지로 이동
        localStorage.setItem(
          'accessToken',
          response.data.headers['authorization']
        );
        localStorage.setItem(
          'refreshToken',
          response.data.headers['refresh-token']
        );

        navigate('/main');
      } catch (error) {
        console.error('로그인 실패', error);
        setError('로그인 실패. Id와 Pw를 확인하세요.');
      }
    }
  };

  return (
    <SC.InnerFrame>
      <SC.Logo>
        <SC.LogoImg src={logo} alt="logo" />
      </SC.Logo>
      <SC.TextWrapper>
        <SC.SignInText>Sign In</SC.SignInText>
      </SC.TextWrapper>
      <SC.Partition>
        <img src={line} alt="line" />
      </SC.Partition>
      <InputIdPw
        loginInfo={loginInfo}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      {error && <ErrorPage>{error}</ErrorPage>}
      <UnderBar></UnderBar>
    </SC.InnerFrame>
  );
};

export default InnerBlock;
