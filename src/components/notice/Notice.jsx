import Board from './main/mainBoard/Board.jsx';
import MainHeader from './main/mainHeader/MainHeader.jsx';
import Pages from './sideBar/Pages';
import Profile from './sideBar/Profile';
import * as SC from './sideBar/style';

const Notice = () => {
  return (
    <SC.Notice>
      <SC.SideBar>
        <Profile />
        <Pages />
      </SC.SideBar>
      <MainHeader />
      <Board />
    </SC.Notice>
  );
};

export default Notice;
