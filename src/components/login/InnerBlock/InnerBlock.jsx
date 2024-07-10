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
  //로그인 입력 저장
  const [loginInfo, setLoginInfo] = useState({
    Id: '',
    Pw: '',
  });
  // 에러 문구 저장
  const [error, setError] = useState({
    Id: '',
    Pw: '',
    general: '',
  });

  const validateForm = () => {
    // id, pw 에러 분리해서 전달
    let errorMsg = { Id: '', Pw: '' };

    if (!loginInfo.Id) {
      errorMsg.Id = '아이디를 입력하세요';
    }
    if (loginInfo.Id.length < 6 || loginInfo.Pw.length > 12) {
      errorMsg.Id = '아이디는 6~12자 이내로 입력하셔야 합니다';
    }
    if (!loginInfo.Pw) {
      errorMsg.Pw = '비밀번호를 입력하세요';
    }
    if (loginInfo.Pw.length < 8 || loginInfo.Pw.length > 20) {
      errorMsg.Pw = '비밀번호는 8~20자 이내로 입력하셔야 합니다';
    }
    // if (loginInfo.Pw.length < 8) {
    //   return 'Password는 8자 이상이여야 합니다.';
    // }

    return errorMsg;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError((prev) => ({
      ...prev,
      [name]: '',
      general: '',
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // id, pw 입력 확인
    const validateError = validateForm();
    // 입력 오류가 있으면 error 설정
    if (validateError.Id || validateError.Pw) {
      setError(validateError);
    } else {
      setError({ Id: '', Pw: '', general: '' });

      try {
        console.log(loginInfo);

        // 입력 오류가 없으면 데이터 전송
        const response = await axios({
          method: 'post',
          url: 'http://192.168.10.59:8000/user_api/login/',
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
        setError({ ...error, general: '로그인 실패. Id와 Pw를 확인하세요.' });
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
        error={error}
      />
      {error.general && <ErrorPage>{error.general}</ErrorPage>}
      <UnderBar />
    </SC.InnerFrame>
  );
};

export default InnerBlock;
