import { useNavigate } from 'react-router-dom';

import * as SC from './styled';

const SignInBtn = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <SC.SignInBtn onClick={handleClick}>
      <SC.SignUp>
        <SC.SignInText>Sign in</SC.SignInText>
      </SC.SignUp>
    </SC.SignInBtn>
  );
};

export default  SignInBtn;
