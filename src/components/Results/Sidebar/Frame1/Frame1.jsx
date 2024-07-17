import * as SC from './style';

import Pages from '../../../notice/sideBar/Pages';
import Profile from '../../../notice/sideBar/Profile';

const Frame1 = () => {
  return (
    <SC.Frame1Container>
      <SC.SideBar>
        <Profile />
        <Pages />
      </SC.SideBar>
    </SC.Frame1Container>
  );
};

export default Frame1;
