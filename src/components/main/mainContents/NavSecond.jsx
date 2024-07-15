import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import * as SC from './styled';
import MenuToggle from './MenuToggle';

import logo from '../../../assets/images/GreenCity.png';

const NavSecond = () => {
  const navigate = useNavigate();

  const clickHandler = (url) => {
    if (url === 'results') {
      navigate('/results');
    }
    if (url === 'notice') {
      navigate('/notice');
    }
    // if (url === 'settings') {
    //   navigate('/settings');
    // }
  };

  const [iconStatus, setIconStatus] = useState('default');
  const toggle = () => {
    iconStatus === 'default' ? setIconStatus('open') : setIconStatus('default');
  };

  return (
    <SC.HeaderWrapper2>
      <SC.LogoContainer>
        <SC.Logo src={logo} alt="로고" />
      </SC.LogoContainer>
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
  );
};

export default NavSecond;
