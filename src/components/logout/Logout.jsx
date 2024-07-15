import React from 'react';

const Logout = () => {
  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    alert('로그아웃 되었습니다.');
    window.location.href = '/login'; // 로그인 페이지로 리다이렉트
  };

  return (
    <button onClick={handleLogout}>로그아웃</button>
  );
};

export default Logout;