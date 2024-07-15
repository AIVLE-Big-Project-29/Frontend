import { useNavigate } from 'react-router-dom';

import * as SC from './styled';

const SignUpBtn = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/signup');
  };

  return (
    <SC.SignUpBtn onClick={handleClick}>
      <SC.SignUp>
        <SC.SignUpText>Sign up</SC.SignUpText>
      </SC.SignUp>
    </SC.SignUpBtn>
  );
};

export default SignUpBtn;
