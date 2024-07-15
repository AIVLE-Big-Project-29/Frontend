import * as SC from './styled';

const InputIdPw = ({ onChange, onSubmit, error }) => {
  return (
    <SC.Frame onSubmit={onSubmit}>
      <SC.InputId
        type="text"
        id="Id"
        name="Id"
        placeholder="아이디"
        onChange={onChange}
        hasError={error.Id}
      />
      <SC.ErrorIdText>{error.Id}</SC.ErrorIdText>
      <SC.InputId
        type="password"
        id="Pw"
        name="Pw"
        placeholder="비밀번호"
        onChange={onChange}
        hasError={error.Pw}
      />
      <SC.ErrorPwText>{error.Pw}</SC.ErrorPwText>
      <SC.InputBtn type="submit">
        <SC.BtnText>
          <SC.Text>Sign In</SC.Text>
        </SC.BtnText>
      </SC.InputBtn>
    </SC.Frame>
  );
};

export default InputIdPw;
