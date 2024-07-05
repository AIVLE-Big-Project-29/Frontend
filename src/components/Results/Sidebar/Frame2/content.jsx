import React from 'react';
import * as SC from './style';

import img5 from '../../../../assets/images/5.svg';
import img6 from '../../../../assets/images/6.svg';
import img7 from '../../../../assets/images/7.svg';
import img8 from '../../../../assets/images/8.svg';

const SidebarContents = ({ section }) => {
  return (
    <SC.Sidebar>
      {section === "1" && (
        <SC.SidebarContent1>
          <SC.IconImage3 src={img5} alt="Icon 5" />
          <SC.Button>Clear conversations</SC.Button>
        </SC.SidebarContent1>
      )}
      {section === "2" && (
        <SC.SidebarContent2>
          <SC.IconImage3 src={img6} alt="Icon 6" />
          <SC.Button>Light mode</SC.Button>
        </SC.SidebarContent2>
      )}
      {section === "3" && (
        <SC.SidebarContent3>
          <SC.IconImage3 src={img7} alt="Icon 7" />
          <SC.Button>My account</SC.Button>
        </SC.SidebarContent3>
      )}
      {section === "4" && (
        <SC.SidebarContent4>
          <SC.IconImage3 src={img8} alt="Icon 8" />
          <SC.Button>Log out</SC.Button>
        </SC.SidebarContent4>
      )}
    </SC.Sidebar>
  );
};

export default SidebarContents;
