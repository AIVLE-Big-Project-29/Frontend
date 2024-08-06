import MenuToggle1 from '../../../assets/images/menuToggle1.svg?react';
import MenuToggle2 from '../../../assets/images/menuToggle2.svg?react';
import * as SC from './style';

const MenuToggle = ({ onClick, state }) => {
  return (
    <SC.ToggleWrapper onClick={onClick} status={state}>
      <MenuToggle1 className="svg-1" />
      <MenuToggle2 className="svg-2" />
    </SC.ToggleWrapper>
  );
};

export default MenuToggle;
