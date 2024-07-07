import Sidebar from './Sidebar/Sidebar';
import DataRequirementContent from './Frame/Content/DataRequirementContent';

import * as SC from './StyledComponents'; // import 수정

const Requirement = () => {
  return (
    <SC.Container>
      <SC.SidebarContainer>
        <Sidebar />
      </SC.SidebarContainer>
      <SC.MainContent>
        <DataRequirementContent />
      </SC.MainContent>
    </SC.Container>
  );
};

export default Requirement;
