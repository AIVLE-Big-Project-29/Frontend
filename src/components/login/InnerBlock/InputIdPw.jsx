import * as SC from './styled';

const InputIdPw = ({ loginInfo, onChange, onSubmit }) => {
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
      ></SC.InputId>
      <SC.InputBtn type="submit">
        <SC.BtnText>
          <SC.Text>Sign In</SC.Text>
        </SC.BtnText>
      </SC.InputBtn>
    </SC.Frame>
  );
};

export default InputIdPw;
