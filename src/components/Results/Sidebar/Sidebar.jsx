import Frame1 from './Frame1/Frame1';
import Frame2 from './Frame2/Frame2';
import * as SC from './style'; // 스타일 파일 import

const Sidebarbox = () => {
  return (
    <SC.FContainer>
      <SC.Frame1Container>
        <Frame1 /> {/* MainContent에 Frame1 사용 */}
      </SC.Frame1Container>
      <SC.Frame2Container>
        <Frame2 /> {/* Frame2를 사이드바로 사용 */}
      </SC.Frame2Container>
    </SC.FContainer>
  );
};

export default Sidebarbox;
