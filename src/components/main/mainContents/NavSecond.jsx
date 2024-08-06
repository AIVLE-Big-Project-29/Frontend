import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import * as SC from './styled';
import MenuToggle from './MenuToggle';

const NavSecond = () => {
  const navigate = useNavigate();
  const [iconStatus, setIconStatus] = useState('default');
  const [overlayVisible, setOverlayVisible] = useState(false);

  const clickHandler = (url) => {
    if (url === 'results') {
      navigate('/results');
    }
    if (url === 'notice') {
      navigate('/notice');
    }
    if (url === 'settings') {
      navigate('/settings');
    }
  };

  const toggle = () => {
    iconStatus === 'default' ? setIconStatus('open') : setIconStatus('default');
    setOverlayVisible((prev) => !prev);
  };

  return (
    <>
      <SC.HeaderWrapper2>
        <MenuToggle onClick={toggle} state={iconStatus} />
        {iconStatus === 'open' ? (
          <SC.Nav2>
            <SC.NavMenu2 onClick={() => clickHandler('results')}>
              Analysis
            </SC.NavMenu2>
            <SC.NavMenu2 onClick={() => clickHandler('notice')}>
              Notice
            </SC.NavMenu2>
            <SC.NavMenu2 onClick={() => clickHandler('settings')}>
              Settings
            </SC.NavMenu2>
          </SC.Nav2>
        ) : (
          <></>
        )}
      </SC.HeaderWrapper2>
      <SC.BackgroundOverlay onClick={toggle} visible={overlayVisible} />
    </>
  );
};

export default NavSecond;
