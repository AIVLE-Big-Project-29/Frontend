import React from 'react';
import Title from './Title/Title';
import Main from './Main/Main';

import * as SC from './Style';

export const Settings = () => {
  return (
    <SC.OuterContainer>
      <SC.Container>
        <SC.Frame>
          <SC.TitleContainer>
            <Title />
          </SC.TitleContainer>
          <SC.MainContainer>
            <Main />
          </SC.MainContainer>
        </SC.Frame>
      </SC.Container>
    </SC.OuterContainer>
  );
};

export default Settings;