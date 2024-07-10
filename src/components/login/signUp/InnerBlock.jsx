import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import * as SC from '../InnerBlock/styled';
import logo from '../../../assets/images/logo.svg';
import line from '../../../assets/images/Line.svg';
import InputId from './InputId';
import ErrorPage from '../../ErrorPage';

const InnerBlock = () => {
  const navigate = useNavigate();
  const [signUpInfo, setSignUpInfo] = useState({
    Id: '',
    Pw: '',
    confirmPw: '',
  });
  const [error, setError] = useState({
    Id: '',
    Pw: '',
    general: '',
  });

  const validateForm = () => {
    let errorMsg = { Id: '', Pw: '' };
    if (!signUpInfo.Id) {
      errorMsg.Id = '아이디를 입력하세요';
    }
    if (signUpInfo.Id.length < 6 || signUpInfo.Pw.length > 12) {
      errorMsg.Id = '아이디는 6~12자 이내로 입력하셔야 합니다';
    }
    if (!signUpInfo.Pw) {
      errorMsg.Pw = '비밀번호를 입력하세요';
    }
    if (signUpInfo.Pw.length < 8 || signUpInfo.Pw.length > 20) {
      errorMsg.Pw = '비밀번호는 8~20자 이내로 입력하셔야 합니다';
    }
    // if (signUpInfo.Pw.length < 8) {
    //   return 'Password는 8자 이상이여야 합니다.';
    // }

    return errorMsg;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignUpInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError((prev) => ({
      ...prev,
      [name]: '',
      general: '',
    }));
    console.log(signUpInfo);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // id, pw 입력 확인
    const validateError = validateForm();
    // 입력 오류가 있으면 error 설정
    if (validateError.Id || validateError.Pw) {
      setError(validateError);
    } else {
      setError({ Id: '', Pw: '', general: '' });
      // 입력 오류가 없으면 이메일 인증 페이지로 넘어감
      navigate('/email', { state: signUpInfo });
    }
  };

  return (
    <SC.InnerFrame>
      <SC.Logo>
        <SC.LogoImg src={logo} alt="logo" />
      </SC.Logo>
      <SC.TextWrapper>
        <SC.SignInText>Sign Up</SC.SignInText>
      </SC.TextWrapper>
      <SC.Partition>
        <img src={line} alt="line" />
      </SC.Partition>
      <InputId
        signUpInfo={signUpInfo}
        onChange={handleChange}
        onSubmit={handleSubmit}
        error={error}
      />
      {error.general && <ErrorPage>{error.general}</ErrorPage>}
      {/* <Link
        to="/email"
        state={{
          Id: signUpInfo.Id,
          Pw: signUpInfo.Pw,
        }}
      /> */}
    </SC.InnerFrame>
  );
};

export default InnerBlock;
