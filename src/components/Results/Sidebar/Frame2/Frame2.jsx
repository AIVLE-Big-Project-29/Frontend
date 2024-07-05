import React from 'react';
import SidebarContents from './content'; // content.jsx에서 export된 컴포넌트 import
import * as SC from './style';

const Frame2 = () => {
  return (
    <SC.FrameContainer>
        <SidebarContents section="1" />
        <SidebarContents section="2" />
        <SidebarContents section="3" />
        <SidebarContents section="4" />
    </SC.FrameContainer>
  );
};

export default Frame2;
