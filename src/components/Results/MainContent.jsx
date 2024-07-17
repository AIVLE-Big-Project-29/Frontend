import * as SC from './StyledComponents';
import Sidebar from './Sidebar/Sidebar';
import DataRequirementContent from './Frame/Content/DataRequirementContent';
import IframeMap from './AI/IframeMap';
import ImageUpload from './AI/ImageUpload';

const Results = () => {
  return (
    <SC.Container>
      <SC.SidebarContainer>
        <Sidebar />
      </SC.SidebarContainer>
      <SC.MainContent id="capture">
        <DataRequirementContent />
        <SC.MapContainer>
          <SC.Map dangerouslySetInnerHTML={IframeMap()}></SC.Map>
        </SC.MapContainer>
        <SC.UploadContainer>
          <ImageUpload />
        </SC.UploadContainer>
      </SC.MainContent>
    </SC.Container>
  );
};

export default Results;
