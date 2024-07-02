import * as SC from '../InnerBlock/styled';

const InputIdPw = ({ signUpInfo, onChange, onSubmit }) => {
  return (
    <SC.Frame onSubmit={onSubmit}>
      <SC.InputId
        type="text"
        id="Id"
        name="Id"
        placeholder="Id"
        onChange={onChange}
      />
      <SC.InputId
        type="password"
        id="Pw"
        name="Pw"
        placeholder="PassWord"
        onChange={onChange}
      />
      <SC.InputId
        type="password"
        id="confirmPw"
        name="confirmPw"
        placeholder="confirm Pw"
        onChange={onChange}
      />
      <SC.InputBtn type="submit">
        <SC.BtnText>
          <SC.Text>Sign Up</SC.Text>
        </SC.BtnText>
      </SC.InputBtn>
    </SC.Frame>
  );
};

export default InputIdPw;
