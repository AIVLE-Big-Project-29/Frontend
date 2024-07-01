import * as SC from './styled';

const InputIdPw = () => {
  return (
    <SC.Frame>
      <SC.InputId type="text" id="Id" placeholder="Id"></SC.InputId>
      <SC.InputId type="password" id="PW" placeholder="PassWord"></SC.InputId>
      <SC.InputBtn>
        <SC.BtnText>
          <SC.Text>Sign In</SC.Text>
        </SC.BtnText>
      </SC.InputBtn>
    </SC.Frame>
  );
};

export default InputIdPw;
