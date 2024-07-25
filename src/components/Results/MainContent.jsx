import { useLocation } from 'react-router-dom';
import { useState } from 'react';

import * as SC from './StyledComponents';
import Sidebar from './Sidebar/Sidebar';
import DataRequirementContent from './Frame/Content/DataRequirementContent';
import IframeMap from './AI/IframeMap';
import ImageUpload from './AI/ImageUpload';
import ChartsPrint from './AI/ChartsPrint';
import ExampleImg from './AI/ExampleImg';
import NavSidebar from './Sidebar/NavSidebar';
import question from '../../assets/images/question.png';

const Results = () => {
  const { state } = useLocation();
  const [isUpload, setIsUpload] = useState(false);
  const [receivedImg, setReceivedImg] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const textHandler = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <SC.Container>
      {/* <SC.SidebarContainer>
        <Sidebar />
      </SC.SidebarContainer> */}
      <NavSidebar />
      <SC.MainContent id="capture">
        {/* 데이터 요구사항 */}
        {!isUpload && <DataRequirementContent isUpload={setIsUpload} />}
        {/* 차트 */}
        {isUpload && <ChartsPrint data={state} />}
        {/* 제목 및 설명 */}
        <SC.expContainer>
          <SC.ExpTitleContainer>
            <SC.expTitle>조감도 생성</SC.expTitle>
            <SC.QuestionIconBtn>
              <SC.QuestionIcon
                src={question}
                alt="더보기"
                onClick={textHandler}
              />
            </SC.QuestionIconBtn>
          </SC.ExpTitleContainer>
          {isVisible && (
            <>
              <SC.expText>
                1. 좌측 화면에서 원하는 지역을 검색 후 "이미지 다운로드" 버튼을
                클릭하세요
              </SC.expText>
              <SC.expText>
                2. 우측 하단 파일 업로드를 통해 다운받은 이미지를 등록하고 "파일
                보내기" 버튼을 클릭하세요
              </SC.expText>
            </>
          )}
        </SC.expContainer>
        {/* map */}
        <SC.MapContainer>
          <SC.Map dangerouslySetInnerHTML={IframeMap()} />
          <SC.Map>
            <SC.ImgResultContainer>
              <ExampleImg receivedImg={receivedImg} />
            </SC.ImgResultContainer>
            {/* 이미지 업로드 */}
            <SC.UploadContainer>
              <ImageUpload setReceivedImg={setReceivedImg} />
            </SC.UploadContainer>
          </SC.Map>
        </SC.MapContainer>
      </SC.MainContent>
    </SC.Container>
  );
};

export default Results;
