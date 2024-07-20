import Section from './Section';
import * as SC from './style';
import Footer from './Footer/Footer';

import img1 from '../../../../assets/images/GreenCityBig.png';
import img2 from '../../../../assets/images/2.svg';
import img3 from '../../../../assets/images/3.svg';
import img4 from '../../../../assets/images/4.svg';

const DataRequirementContent = ({ isUpload }) => {
  const dataItems = [
    '환경데이터',
    '',
    '"How do I make an HTTP request in Javascript?"',
    '"How do I make an HTTP request in Javascript?"',
    '"How do I make an HTTP request in Javascript?"',
  ];

  const columnNamesItems = [
    `BOD (Biochemical Oxygen Demand)
    COD (Chemical Oxygen Demand)
    TOC (Total Organic Carbon)
    SS (Suspended Solids)
    DO (Dissolved Oxygen)
    T-P (Total Phosphorus)
    총대장균군 (Total Coliforms)
    분원성대장균군 (Fecal Coliforms)
    암모니아성질소 (Ammonia Nitrogen)
    질산성질소 (Nitrate Nitrogen)
    용존총질소 (Dissolved Total Nitrogen)
    인산염인 (Phosphate Phosphorus)
    용존총인 (Dissolved Total Phosphorus)
    클로로필A (Chlorophyll A)
    pH 분류 (pH Classification)
    수온 분류 (Water Temperature Classification)
    전도 분류 (Conductivity Classification)`,
    'Allows user to provide follow-up corrections.',
    'Trained to decline inappropriate requests.',
    'Trained to decline inappropriate requests.',
    'Trained to decline inappropriate requests.',
  ];

  const explanationItems = [
    '수질의 질을 나타내는 다양한 지표 데이터와 대기의 오염 정도를 나타내는 지표 데이터를 포함한다.',
    'May occasionally produce harmful instructions or biased content.',
    'Limited knowledge of world and events after 2021.',
    'Limited knowledge of world and events after 2021.',
    'Limited knowledge of world and events after 2021.',
  ];

  return (
    <>
      <SC.ContentWrapper>
        <SC.Header>
          <SC.IconImage1 src={img1} alt="Icon 1" />
          <SC.IconTitle>데이터 요구사항</SC.IconTitle>
        </SC.Header>
        <SC.Main>
          <Section title="Data" items={dataItems} src={img2} />
          <Section title="Column names" items={columnNamesItems} src={img3} />
          <Section title="Explanation" items={explanationItems} src={img4} />
        </SC.Main>
      </SC.ContentWrapper>
      <Footer isUpload={isUpload} />
    </>
  );
};

export default DataRequirementContent;
