import { useLocation } from 'react-router-dom';
import { useState } from 'react';

import * as SC from './StyledComponents';
import Sidebar from './Sidebar/Sidebar';
import DataRequirementContent from './Frame/Content/DataRequirementContent';
import IframeMap from './AI/IframeMap';
import ImageUpload from './AI/ImageUpload';
import ChartsPrint from './AI/ChartsPrint';

const Results = () => {
  const { state } = useLocation();
  const [isUpload, setIsUpload] = useState(false);

  return (
    <SC.Container>
      <SC.SidebarContainer>
        <Sidebar />
      </SC.SidebarContainer>
      <SC.MainContent id="capture">
        {/* 데이터 요구사항 */}
        {!isUpload && <DataRequirementContent isUpload={setIsUpload} />}
        {/* 차트 */}
        {isUpload && <ChartsPrint data={state} />}
        {/* <ChartsPrint data={state} /> */}
        {/* map */}
        <SC.MapContainer>
          <SC.Map dangerouslySetInnerHTML={IframeMap()}></SC.Map>
        </SC.MapContainer>
        {/* 이미지 업로드 */}
        <SC.UploadContainer>
          <ImageUpload />
        </SC.UploadContainer>
      </SC.MainContent>
    </SC.Container>
  );
};

export default Results;
