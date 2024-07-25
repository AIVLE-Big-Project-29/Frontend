import * as SC from './style';

const ExampleImg = ({ receivedImg }) => {
  return (
    <SC.ExampleContainer>
      {/* 예시 출력 */}
      {!receivedImg && (
        <>
          <SC.ExampleText>
            다운로드받은 이미지를 업로드하면 다음과 같은 조감도가 출력됩니다
          </SC.ExampleText>
          <SC.ExampleText>왼쪽의 지도와 비교해보세요</SC.ExampleText>
          {/* <SC.ExampleImg src={exampleImg} alt="예시 이미지" /> */}
        </>
      )}
      {/* 조감도 출력 */}
      {receivedImg && (
        <>
          <img src={receivedImg} alt="조감도" />
          <a href={receivedImg} download="result.png">
            Download Image
          </a>
        </>
      )}
    </SC.ExampleContainer>
  );
};

export default ExampleImg;
