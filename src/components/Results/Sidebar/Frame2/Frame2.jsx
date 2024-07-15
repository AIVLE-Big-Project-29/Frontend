import React from 'react';
import * as SC from './style';

import img6 from '../../../../assets/images/6.svg';
import img7 from '../../../../assets/images/7.svg';
import img8 from '../../../../assets/images/8.svg';

const Frame2 = () => {
  return (
    <SC.FrameContainer>
      <SC.SidebarContent>
        <SC.IconImage src={img6} alt="Icon 6" />
        <SC.Button>Light mode</SC.Button>
      </SC.SidebarContent>
      <SC.SidebarContent>
        <SC.IconImage src={img7} alt="Icon 7" />
        <SC.Button>My account</SC.Button>
      </SC.SidebarContent>
      <SC.SidebarContent>
        <SC.IconImage src={img8} alt="Icon 8" />
        <SC.Button>Log out</SC.Button>
      </SC.SidebarContent>
    </SC.FrameContainer>
  );
};

export default Frame2;
