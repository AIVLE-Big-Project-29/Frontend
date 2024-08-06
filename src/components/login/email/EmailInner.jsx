import * as SC from './style';
import email from '../../../assets/images/bigEmail.svg';

const EmailInner = ({
  onChange,
  onClick,
  onSignUp,
  formatTime,
  seconds,
  isActive,
}) => {
  return (
    <SC.Frame>
      <SC.EmailIconWrapper>
        <SC.EmailIcon src={email} alt="이메일 아이콘" />
      </SC.EmailIconWrapper>
      <SC.EmailText>
        <SC.LargeText>Check your inbox</SC.LargeText>
        <SC.SmallText>
          Please open the link in the email to continue or Enter the
          verification code we sent to
        </SC.SmallText>
        <SC.MidText>@naver.com</SC.MidText>
      </SC.EmailText>
      <SC.EmailAuth>
        <SC.InputEmail
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={onChange}
        />
        <SC.SendEmailBtn onClick={onClick}>
          <SC.EmailBtnInner>
            <SC.EmailBtnText>Send</SC.EmailBtnText>
          </SC.EmailBtnInner>
        </SC.SendEmailBtn>
      </SC.EmailAuth>
      <SC.InputBtn type="submit" onClick={onSignUp}>
        <SC.BtnText>
          <SC.Text>Sign Up</SC.Text>
        </SC.BtnText>
      </SC.InputBtn>
      {isActive && <SC.SmallText>{formatTime(seconds)}</SC.SmallText>}
    </SC.Frame>
  );
};

export default EmailInner;
