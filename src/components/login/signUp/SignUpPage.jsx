import * as SC from '../styled';
import SignUpBtn from '../SignUpBtn';
import SignInBtn from '../SignInBtn';
import MainBlock from './MainBlock';

const SignUpPage = () => {
  return (
    <SC.SignIn>
      <SC.Header>
        <SignUpBtn />
        <SignInBtn />
      </SC.Header>
      <MainBlock />
    </SC.SignIn>
  );
};

export default SignUpPage;
