import * as SC from './styled';

import EnterAnimation from './enterAnimation/EnterAnimation';
import MainContents from './mainContents/MainContents';
import { GlobalStyles } from '../../GlobalStyles';

const MainPage = () => {
  return (
    <>
      <GlobalStyles />
      <SC.Main>
        <EnterAnimation />
        <MainContents />
      </SC.Main>
    </>
  );
};

export default MainPage;
