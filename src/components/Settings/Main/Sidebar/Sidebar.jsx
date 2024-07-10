import React from 'react';
import * as SC from './style';
import img2 from '../../../../assets/images/._..png';

const Sidebar = () => {
  return (
      <SC.SidebarContainer>
        <SC.SidebarItem>
          <SC.SidebarIcon src={img2} alt="Icon" />
          김태희
        </SC.SidebarItem>
      </SC.SidebarContainer>
  );
};

export default Sidebar;
