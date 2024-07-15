import { useState } from 'react';
import axios from 'axios';

import * as SC from '../InnerBlock/styled';
import logo from '../../../assets/images/logo.svg';
import line from '../../../assets/images/Line.svg';
import InputId from './InputId';
import ErrorPage from '../../ErrorPage';

const InnerBlock = () => {
  const [signUpInfo, setSignUpInfo] = useState({
    Id: '',
    Pw: '',
    confirmPw: '',
  });
  const [error, setError] = useState('');

  const validateForm = () => {
    if (!signUpInfo.Id) {
      return 'Id를 입력하세요';
    }
    if (!signUpInfo.Pw) {
      return '비밀번호를 입력하세요';
    }
    if (signUpInfo.Pw.length < 8) {
      return '비밀번호는 8자 이상이여야 합니다';
    }
    if (signUpInfo.confirmPw !== signUpInfo.Pw) {
      return '비밀번호가 일치하지 않습니다';
    }

    return null;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignUpInfo((prev) => ({
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
        // 입력 오류가 없으면 데이터 전송
        const response = await axios.post('signup api', {
          id: signUpInfo.Id,
          pw: signUpInfo.Pw,
        });
        console.log('회원가입 성공', response.data);
        // 로그인 성공 후 처리 로직 추가
      } catch (error) {
        console.error('회원가입 실패', error);
        setError('회원가입 실패. Id와 Pw를 확인하세요.');
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
      <InputId
        signUpInfo={signUpInfo}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      {error && <ErrorPage>{error}</ErrorPage>}
    </SC.InnerFrame>
  );
};

export default InnerBlock;
