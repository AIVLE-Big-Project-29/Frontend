import * as SC from './style';

import arrow from '../../../assets/images/arrow.svg';
import book from '../../../assets/images/book.svg';
import analysis from '../../../assets/images/notice.svg';
import MenuIconText from './MenuIconText';
import { useNavigate } from 'react-router-dom';

const Pages = () => {
  const navigate = useNavigate();
  const clickHandler = (txt) => {
    if (txt === 'main') {
      navigate('/main');
    } else if (txt === 'analysis') {
      navigate('/notice');
    }
  };

  return (
    <SC.PageMenu>
      <SC.MenuTitle>
        <SC.Title>Pages</SC.Title>
      </SC.MenuTitle>
      <SC.Menues onClick={() => clickHandler('main')}>
        {/* <SC.PreIconWrapper>
          <SC.PreIcon>
            <SC.ArrowIcon src={arrow} alt="화살 아이콘" />
          </SC.PreIcon>
        </SC.PreIconWrapper> */}
        <MenuIconText src={book} txt={'Home'} />
      </SC.Menues>
      <SC.Menues onClick={() => clickHandler('analysis')}>
        {/* <SC.PreIconWrapper>
          <SC.PreIcon>
            <SC.ArrowIcon src={arrow} alt="화살 아이콘" />
          </SC.PreIcon>
        </SC.PreIconWrapper> */}
        <MenuIconText src={analysis} txt={'Notice'} />
      </SC.Menues>
    </SC.PageMenu>
  );
};

export default Pages;
