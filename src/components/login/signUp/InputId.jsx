import * as SC from '../InnerBlock/styled';

const InputIdPw = ({ onChange, onSubmit, error }) => {
  return (
    <SC.Frame onSubmit={onSubmit}>
      <SC.InputId
        type="text"
        id="Id"
        name="Id"
        placeholder="아이디 (6~12자 이내 영문, 숫자 사용 가능)"
        onChange={onChange}
        hasError={error.Id}
      />
      <SC.ErrorIdText>{error.Id}</SC.ErrorIdText>
      <SC.InputId
        type="password"
        id="Pw"
        name="Pw"
        placeholder="비밀번호 (8~20자 이내 문자/숫자/기호 사용 가능)"
        onChange={onChange}
        hasError={error.Pw}
      />
      <SC.ErrorPwText>{error.Pw}</SC.ErrorPwText>
      <SC.InputId
        type="password"
        id="confirmPw"
        name="confirmPw"
        placeholder="비밀번호 확인"
        onChange={onChange}
        hasError={error.ConfirmPw}
      />
      <SC.ErrorIdText>{error.ConfirmPw}</SC.ErrorIdText>
      <SC.InputBtn type="submit">
        <SC.BtnText>
          <SC.Text>Email Authentication</SC.Text>
        </SC.BtnText>
      </SC.InputBtn>
    </SC.Frame>
  );
};

export default InputIdPw;
