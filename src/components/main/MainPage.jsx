import * as SC from './styled';

import EnterAnimation from './enterAnimation/EnterAnimation';
import MainContents from './mainContents/MainContents';

const MainPage = () => {
  return (
    <SC.Main>
      <EnterAnimation />
      <MainContents />
    </SC.Main>
  );
};

export default MainPage;
