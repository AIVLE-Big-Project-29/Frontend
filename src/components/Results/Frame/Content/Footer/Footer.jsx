import * as SC from './style';

import plane from '../../../../../assets/images/submitPlane.svg';

const Footer = () => {
  return (
    <SC.FooterContainer>
      <SC.InputBox>
        <SC.InputContents>
          <SC.Input placeholder="Enter your text here" />
          <SC.Submit>
            <SC.SubmitBtn>
              <SC.SubmitIcon src={plane} alt="submit plane" />
            </SC.SubmitBtn>
          </SC.Submit>
        </SC.InputContents>
      </SC.InputBox>
    </SC.FooterContainer>
  );
};

export default Footer;
