import * as SC from './style';

import Profile from './Profile';
import book from '../../../../assets/images/book.svg';
import notice from '../../../../assets/images/notice.svg';
import MenuIconText from '../../../notice/sideBar/MenuIconText';
import { useNavigate } from 'react-router-dom';

const Pages = () => {
  const navigate = useNavigate();
  const clickHandler = (txt) => {
    if (txt === 'main') {
      navigate('/main');
    } else if (txt === 'notice') {
      navigate('/notice');
    } else if (txt === 'results') {
      navigate('/results');
    }
  };

  return (
    <SC.PageMenu>
      <Profile />
      <SC.MenuTitle>
        <SC.Title>Pages</SC.Title>
      </SC.MenuTitle>
      <SC.Menues onClick={() => clickHandler('main')}>
        <MenuIconText src={book} txt={'Home'} />
      </SC.Menues>
      <SC.Menues onClick={() => clickHandler('notice')}>
        <MenuIconText src={notice} txt={'Notice'} />
      </SC.Menues>
      <SC.Menues onClick={() => clickHandler('results')}>
        <MenuIconText src={notice} txt={'Results'} />
      </SC.Menues>
    </SC.PageMenu>
  );
};

export default Pages;
