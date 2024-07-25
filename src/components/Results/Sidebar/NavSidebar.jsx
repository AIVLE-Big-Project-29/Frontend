import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import * as SC from './style';
import MenuToggle from './MenuToggle';
import Frame1 from './Frame1/Frame1';
import Profile from './Frame1/Profile';

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

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    alert('로그아웃 되었습니다.');
    window.location.href = '/'; // 로그인 페이지로 리다이렉트
  };

  const clickHandler = (url) => {
    if (url === 'main') {
      navigate('/main');
    }
    if (url === 'results') {
      navigate('/results');
    }
    if (url === 'notice') {
      navigate('/notice');
    }
    if (url === 'settings') {
      navigate('/settings');
    }
    if (url === 'logout') {
      handleLogout();
    }
  };

  return (
    <>
      <SC.HeaderWrapper2>
        <SC.MenuToggleWrapper>
          <MenuToggle onClick={toggle} state={iconStatus} />
        </SC.MenuToggleWrapper>
        {iconStatus === 'open' ? (
          <SC.NavContainer>
            <Profile />
            <SC.NavMenu2 onClick={() => clickHandler('main')}>Main</SC.NavMenu2>
            <SC.NavMenu2 onClick={() => clickHandler('results')}>
              Analysis
            </SC.NavMenu2>
            <SC.NavMenu2 onClick={() => clickHandler('notice')}>
              Notice
            </SC.NavMenu2>
            {/* <SC.NavMenu2 onClick={() => clickHandler('settings')}>
              Settings
            </SC.NavMenu2> */}
            <SC.NavMenu2 onClick={() => clickHandler('logout')}>
              Logout
            </SC.NavMenu2>
          </SC.NavContainer>
        ) : (
          <></>
        )}
      </SC.HeaderWrapper2>
      <SC.BackgroundOverlay onClick={toggle} visible={overlayVisible} />
    </>
  );
};

export default NavSidebar;
