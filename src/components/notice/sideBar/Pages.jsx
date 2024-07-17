import * as SC from './style';

import book from '../../../assets/images/book.svg';
import analysis from '../../../assets/images/analysis.svg';
import MenuIconText from './MenuIconText';
import { useNavigate } from 'react-router-dom';

const Pages = () => {
  const navigate = useNavigate();
  const clickHandler = (txt) => {
    if (txt === 'main') {
      navigate('/main');
    } else if (txt === 'analysis') {
      navigate('/results');
    }
  };

  return (
    <SC.PageMenu>
      <SC.MenuTitle>
        <SC.Title>Pages</SC.Title>
      </SC.MenuTitle>
      <SC.Menues onClick={() => clickHandler('main')}>
        <MenuIconText src={book} txt={'Home'} />
      </SC.Menues>
      <SC.Menues onClick={() => clickHandler('analysis')}>
        <MenuIconText src={analysis} txt={'Analysis'} />
      </SC.Menues>
    </SC.PageMenu>
  );
};

export default Pages;
