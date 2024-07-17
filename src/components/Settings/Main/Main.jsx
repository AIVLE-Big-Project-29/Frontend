import Sidebar from './Sidebar/Sidebar';
import Page from './Page/Page';

import * as SC from './style';

export const Settings = () => {
  return (
    <SC.MainContent>
      <SC.SidebarContainer>
        <Sidebar />
      </SC.SidebarContainer>
      <Page />
    </SC.MainContent>
  );
};

export default Settings;
