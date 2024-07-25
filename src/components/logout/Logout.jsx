export const handleLogout = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  localStorage.removeItem('userId');
  alert('로그아웃 되었습니다.');
  window.location.href = '/'; // 로그인 페이지로 리다이렉트
};

const Logout = () => {
  return <button onClick={handleLogout}>로그아웃</button>;
};

export default Logout;
