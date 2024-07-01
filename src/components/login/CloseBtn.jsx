import * as SC from './styled';

import close from '../../assets/images/Vector.svg';

const CloseBtn = () => {
  return (
    <SC.CloseBtn>
      <SC.IconSet>
        <SC.CloseIcon src={close} alt="close icon" />
      </SC.IconSet>
    </SC.CloseBtn>
  );
};

export default CloseBtn;
