import { useLocation } from 'react-router-dom';
import Board from './main/mainBoard/Board.jsx';
import MainHeader from './main/mainHeader/MainHeader.jsx';
import Pages from './sideBar/Pages';
import Profile from './sideBar/Profile';
import * as SC from './sideBar/style';
import NavSidebar from '../Results/Sidebar/NavSidebar.jsx';

const Notice = () => {
  const location = useLocation();
  const noticeArticle = location.state;
  return (
    <SC.Notice>
      {/* <SC.SideBar>
        <Profile />
        <Pages />
      </SC.SideBar> */}
      <NavSidebar />
      <MainHeader />
      <Board data={noticeArticle} />
    </SC.Notice>
  );
};

export default Notice;
