import { useLocation } from 'react-router-dom';

import * as SC from '../styled';
import SignUpBtn from '../SignUpBtn';
import SignInBtn from '../SignInBtn';
import EmailBlock from './EmailBlock';

const EmailAuth = () => {
  const location = useLocation();
  const signUpInfo = location.state;

  return (
    <SC.SignIn>
      <SC.Header>
        <SignUpBtn />
        <SignInBtn />
      </SC.Header>
      <EmailBlock signUpInfo={signUpInfo} />
    </SC.SignIn>
  );
};

export default EmailAuth;
