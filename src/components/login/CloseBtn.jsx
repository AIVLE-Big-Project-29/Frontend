import * as SC from './styled';
import { useNavigate } from 'react-router-dom';

import close from '../../assets/images/Vector.svg';

const CloseBtn = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };
    
  return (
    <SC.CloseBtn>
      <SC.IconSet>
        <SC.CloseIcon onClick={handleClick} src={close} alt="close icon" />
      </SC.IconSet>
    </SC.CloseBtn>
  );
};

export default CloseBtn;
