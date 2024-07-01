import * as SC from './styled';

import InputIdPw from './InputIdPw';
import logo from '../../../assets/images/logo.svg';
import line from '../../../assets/images/Line.svg';
import UnderBar from './UnderBar';

const InnerBlock = () => {
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
      <InputIdPw></InputIdPw>
      <UnderBar></UnderBar>
    </SC.InnerFrame>
  );
};

export default InnerBlock;
