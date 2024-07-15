import * as SC from '../styled';

import arrow from '../../../assets/images/leftArrow.svg';

const ArrowBtn = ({ onClick }) => {
  return (
    <SC.CloseBtn onClick={onClick}>
      <SC.IconSet>
        <SC.CloseIcon src={arrow} alt="arrow icon" />
      </SC.IconSet>
    </SC.CloseBtn>
  );
};

export default ArrowBtn;
