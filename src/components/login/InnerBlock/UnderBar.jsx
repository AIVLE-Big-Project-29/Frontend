import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as SC from './styled';

const UnderBar = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/agreement');
  };

  return (
    <SC.UnderBarFrame>
      <SC.UnderBarSign onClick={handleSignUpClick}>Sign Up</SC.UnderBarSign>
      <SC.UnderBarForgot>Forgot Password</SC.UnderBarForgot>
      <SC.UnderBarContact>Contact Us</SC.UnderBarContact>
    </SC.UnderBarFrame>
  );
};

export default UnderBar;
