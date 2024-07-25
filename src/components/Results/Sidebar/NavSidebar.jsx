import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import * as SC from './style';
import MenuToggle from './MenuToggle';
import Frame1 from './Frame1/Frame1';

const NavSidebar = () => {
  const navigate = useNavigate();
  const [iconStatus, setIconStatus] = useState('default');
  const [overlayVisible, setOverlayVisible] = useState(false);

  // const clickHandler = (url) => {
  //   if (url === 'results') {
  //     navigate('/results');
  //   }
  //   if (url === 'notice') {
  //     navigate('/notice');
  //   }
  //   if (url === 'settings') {
  //     navigate('/settings');
  //   }
  // };

  const toggle = () => {
    iconStatus === 'default' ? setIconStatus('open') : setIconStatus('default');
    setOverlayVisible((prev) => !prev);
  };

  return (
    <>
      <SC.HeaderWrapper2>
        <SC.MenuToggleWrapper>
          <MenuToggle onClick={toggle} state={iconStatus} />
        </SC.MenuToggleWrapper>
        {iconStatus === 'open' ? <Frame1></Frame1> : <></>}
      </SC.HeaderWrapper2>
      <SC.BackgroundOverlay onClick={toggle} visible={overlayVisible} />
    </>
  );
};

export default NavSidebar;
